import SocialProfile from '../models/socialProfile.js';

// Create a new social profile
export const createSocialProfile = async (req, res) => {
    try {
        const socialProfile = new SocialProfile(req.body);
        const savedProfile = await socialProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a social profile by user ID
export const getSocialProfileByUserId = async (req, res) => {
    try {
        const profile = await SocialProfile.findOne({ userId: req.params.userId });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a social profile
export const updateSocialProfile = async (req, res) => {
    try {
        const updatedProfile = await SocialProfile.findOneAndUpdate(
            { userId: req.params.userId },
            req.body,
            { new: true }
        );
        if (!updatedProfile) return res.status(404).json({ message: 'Profile not found' });
        res.json(updatedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a social profile
export const deleteSocialProfile = async (req, res) => {
    try {
        const deletedProfile = await SocialProfile.findOneAndDelete({ userId: req.params.userId });
        if (!deletedProfile) return res.status(404).json({ message: 'Profile not found' });
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
