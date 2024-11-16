// controllers/auth.js
import User from "../models/user.js";
import SocialProfile from "../models/socialProfile.js";
import jwt from "jsonwebtoken";

const createDefaultSocialProfile = (username) => {
  if (!username) return null;

  return {
    username,
    poolsCreated: 0,
    poolIds: [],
    activePools: 0,
    totalPools: 0,
  };
};

export const registerUser = async (req, res) => {
  const { walletAddress, socialProfilesLinked, isCreator } = req.body;

  if(!walletAddress){
    return res.status(400).json({ message: "Missing walletAddress." });
  }

  try {
    let user = await User.findOne({ walletAddress });
    if (user) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({ message: "User already exists.", token });
    }

    user = new User({ walletAddress, isCreator });
    await user.save();

   
    const socialProfileData = {
      userId: user._id, 
      twitter: createDefaultSocialProfile(
        socialProfilesLinked.twitter?.username
      ),
      instagram: createDefaultSocialProfile(
        socialProfilesLinked.instagram?.username
      ),
      farcaster: createDefaultSocialProfile(
        socialProfilesLinked.farcaster?.username
      ),
      youtube: createDefaultSocialProfile(
        socialProfilesLinked.youtube?.username
      ),
    };

    const socialProfile = new SocialProfile(socialProfileData);
    const savedProfile = await socialProfile.save();

    user.socialProfilesLinked = savedProfile._id; 
    await user.save(); 


    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res
      .status(201)
      .json({
        message: "User registered successfully.",
        userId: user._id,
        token,
      });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login API
export const loginUser = async (req, res) => {
  const { walletAddress } = req.body;

  try {
    const user = await User.findOne({ walletAddress });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please register." });
    }

    const token = jwt.sign(
      { id: user._id, walletAddress: user.walletAddress },
      process.env.JWT_SECRET
    );

    res.status(200).json({ message: "Login successful.", token,userId: user._id});
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
};
