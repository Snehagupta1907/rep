import User from '../models/user.js';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('socialProfilesLinked');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({data:user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const checkUserExists = async (req, res) => {
    try {
        const { address } = req.params;

        if (!address) {
            return res.status(400).json({ message: 'Address parameter is required' });
        }

        const userExists = await User.exists({ walletAddress: address });

       
        res.status(200).json({ exists: Boolean(userExists) });
    } catch (error) {
        console.error("Error checking user existence:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

