import mongoose from 'mongoose';

const WinnerSchema = new mongoose.Schema({
    poolId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pool', required: true },
    winners: [
        {
            walletAddress: { type: String, required: true },
            amountWon: { type: Number, required: true },
            amountBet: { type: Number, required: true },
            totalProfit: { type: Number, required: true },
            claimed:{type:Boolean,default: false},
            taskCompleted: { type:Number, default:0}
        }
    ]
}, { timestamps: true });

export default mongoose.model('Winner', WinnerSchema);
