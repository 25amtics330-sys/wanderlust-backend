import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'itinerary route works' });
});

export default router;