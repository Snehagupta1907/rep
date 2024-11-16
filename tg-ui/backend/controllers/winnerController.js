import Winner from '../models/winner.js';
import Pool from '../models/pool.js';

// Create a new winner entry for a pool
export const declareWinner = async (req, res) => {
    try {
        const winner = new Winner(req.body);
        const savedWinner = await winner.save();

        // Update the pool's isWinnerDeclared to true
        await Pool.findByIdAndUpdate(req.body.poolId, { isWinnerDeclared: true });

        res.status(201).json(savedWinner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get winner details by pool ID
export const getWinnerByPoolId = async (req, res) => {
    try {
        const winner = await Winner.findOne({ poolId: req.params.poolId });
        if (!winner) return res.status(404).json({ message: 'Winner not found' });
        res.json(winner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


