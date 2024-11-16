import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  socialProfilesLinked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SocialProfile",
  },
  isCreator: { type: Boolean, default: false },
  poolStats: {
    poolsCreated: { type: Number, default: 0 },
    totalPools: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pool" }],
    activePool: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pool" }],
  },
  bettingStats: {
    poolsBetOn: { type: Number, default: 0 },
    poolsWon: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pool" }],
    amountClaimed: { type: Number, default: 0 },
    totalAmountBet: { type: Number, default: 0 },
  },
});

export default mongoose.model("User", UserSchema);
