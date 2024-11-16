import mongoose from 'mongoose';

const SocialProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    twitter: {
        username: { type: String},
        poolsCreated: { type: Number, default: 0 },
        poolIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pool' }],
        activePools: { type: Number, default: 0 },
        totalPools: { type: Number, default: 0 },
    },
    instagram: {
        username: { type: String},
        poolsCreated: { type: Number, default: 0 },
        poolIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pool' }],
        activePools: { type: Number, default: 0 },
        totalPools: { type: Number, default: 0 },
    },
    farcaster: {
        username: { type: String},
        poolsCreated: { type: Number, default: 0 },
        poolIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pool' }],
        activePools: { type: Number, default: 0 },
        totalPools: { type: Number, default: 0 },
    },
    youtube: {
        username: { type: String},
        poolsCreated: { type: Number, default: 0 },
        poolIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pool' }],
        activePools: { type: Number, default: 0 },
        totalPools: { type: Number, default: 0 },
    }
}, { timestamps: true });

export default mongoose.model('SocialProfile', SocialProfileSchema);
