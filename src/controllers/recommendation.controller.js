import User from '../models/User.js';
import Destination from '../models/Destination.js';
import { getAIRecommendation } from '../services/ai.service.js';

export const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const destinations = await Destination.find({
      avgBudget: user.preferences.budget
    }).limit(20);

    const result = await getAIRecommendation(user.preferences, destinations);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};