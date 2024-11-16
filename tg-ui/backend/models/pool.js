import mongoose from 'mongoose';

const UserBetSchema = new mongoose.Schema({
    wallet: { type: String, required: true }, // Wallet address of the user
    score: { type: Number, default: 0 }, // Score the user has (if applicable)
    amount: { type: Number, required: true } // Amount the user has bet
});

const PoolSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    poolName: { type: String, required: true },
    description: { type: String },
    numberOfBets: { type: Number, default: 0 },
    usersWhoBet: [UserBetSchema], // Array of objects for user bets
    isActive: { type: Boolean, default: true },
    isWinnerDeclared: { type: Boolean, default: false },
    poolType: { type: String, enum: ['standard', '1v1'], default: 'standard' },
    startDate: { type: Date, required: true },
    duration: { type: String,required: true},
    endDate: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model('Pool', PoolSchema);
