import express from 'express';
import Destination from '../models/Destination.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const { category, budget, search } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (budget) filter.avgBudget = budget;
  if (search) filter.name = { $regex: search, $options: 'i' };
  const destinations = await Destination.find(filter);
  res.json(destinations);
});

router.post('/', async (req, res) => {
  const dest = await Destination.create(req.body);
  res.status(201).json(dest);
});

export default router;