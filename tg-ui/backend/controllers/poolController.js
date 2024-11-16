import { ethers } from "ethers";
import Pool from "../models/pool.js";
import User from "../models/user.js";
import dotenv from "dotenv";
import { contractAddress, rpc_url } from "../constants/constant.js"; // Ensure you import contractABI correctly

dotenv.config();

// Create a new pool
export const createPool = async (req, res) => {
  const { creator, poolName, startDate, endDate, poolDescription, duration } =
    req.body;
  console.log({
    creator,
    poolName,
    startDate,
    endDate,
    poolDescription,
    duration,
  });
  try {
    const provider = new ethers.JsonRpcProvider(rpc_url);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const tx = await contract.createPool(
      poolName,
      startDate,
      endDate
    );
    const result = await tx.wait();
    if (result.status == 0) {
      throw new Error("Transaction failed.");
    }

    const event = result.logs.find((log) => {
      try {
        const parsedLog = contract.interface.parseLog(log);
        return parsedLog.name === "UtilityAdded";
      } catch (error) {
        console.error("Error parsing log:", error);
        return false;
      }
    });

    console.log(event);

    const userInDb = await User.findOne({ walletAddress: creator });

    if (!userInDb) {
      return res.status(404).json({ message: "User not found" });
    }

    // console.log(userInDb)

    const pool = new Pool({
      creator: userInDb._id,
      poolName,
      startDate,
      endDate,
      description: poolDescription,
      numberOfBets: 0,
      usersWhoBet: [],
      isActive: true,
      isWinnerDeclared: false,
      poolType: req.body.poolType
        ? req.body.poolType.toLowerCase()
        : "standard",
      duration,
    });

    const savedPool = await pool.save();
    await User.findByIdAndUpdate(userInDb._id, {
      $inc: { "poolStats.poolsCreated": 1 },
    });

    await User.findByIdAndUpdate(userInDb._id, {
      $push: { "poolStats.totalPools": savedPool._id },
    });

    await User.findByIdAndUpdate(userInDb._id, {
      $push: { "poolStats.activePool": savedPool._id },
    });

    res.status(201).json(savedPool);
  } catch (error) {
    console.error("Error creating pool:", error);
    res.status(400).json({ message: error.message });
  }
};

// Get a pool by ID
export const getPoolById = async (req, res) => {
  try {
    const pool = await Pool.findById(req.params.id).populate("creator");
    if (!pool) return res.status(404).json({ message: "Pool not found" });
    res.json(pool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// bet on pool
export const betOnPool = async (req, res) => {
  const { poolId, amount, userAddress, score } = req.body;

  try {
    const pool = await Pool.findById(poolId);
    if (!pool || !pool.isActive) {
      return res
        .status(404)
        .json({ message: "Pool not found or is not active." });
    }

    const userBetExists = pool.usersWhoBet.some(
      (bet) => bet.wallet === userAddress
    );

    if (userBetExists) {
      return res
        .status(400)
        .json({ message: "User has already placed a bet in this pool." });
    }

    const userBet = {
      wallet: userAddress,
      score: score,
      amount: amount,
    };

    // Update the pool and user data in the database
    pool.numberOfBets += 1;
    pool.usersWhoBet.push(userBet);

    await pool.save();

    const user = await User.findById(userAddress);
    console.log(
      `Current total amount bet: ${user.bettingStats.totalAmountBet}`
    );

    await User.findByIdAndUpdate(userAddress, {
      $inc: {
        "poolStats.totalBets": 1,
        "bettingStats.totalAmountBet": amount,
      },
      $addToSet: { "bettingStats.poolsBetOn": poolId },
    });

    res.status(200).json({ message: "Bet placed successfully.", pool });
  } catch (error) {
    console.error("Error placing bet:", error);
    res.status(400).json({ message: error.message });
  }
};
