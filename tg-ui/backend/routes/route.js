import express from 'express';
import {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    checkUserExists,     
} from '../controllers/userController.js';
import {
    createPool,
    getPoolById,
    betOnPool
} from '../controllers/poolController.js';
import {
    declareWinner,
    getWinnerByPoolId,
} from '../controllers/winnerController.js';
import {
    createSocialProfile,
    getSocialProfileByUserId,
    updateSocialProfile,
    deleteSocialProfile
} from '../controllers/socialProfileController.js';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// User Routes
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/check-user/:address',checkUserExists)

// Registration Route
router.post('/register', registerUser); 

// Login Route
router.post('/login', loginUser); 

// Pool Routes
router.post('/pools', createPool);
router.get('/pools/:id', getPoolById);
router.post('/pools', betOnPool);

// Winner Routes
router.post('/winners', declareWinner);
router.get('/winners/pool/:poolId', getWinnerByPoolId);

// Social Profile Routes
router.post('/social-profiles', createSocialProfile);
router.get('/social-profiles/user/:userId', getSocialProfileByUserId);
router.put('/social-profiles/user/:userId', updateSocialProfile);
router.delete('/social-profiles/user/:userId', deleteSocialProfile);

export default router;
