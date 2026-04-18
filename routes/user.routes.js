import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'user route works' });
});

export default router;