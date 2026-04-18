import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  state: String,
  description: String,
  category: [String],
  bestSeason: [String],
  avgBudget: { type: String, enum: ['low', 'medium', 'high'] },
  rating: { type: Number, default: 0 },
  images: [String],
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  crowdLevel: { type: String, enum: ['low', 'medium', 'high'] },
  tags: [String]
}, { timestamps: true });

destinationSchema.index({ location: '2dsphere' });

export default mongoose.model('Destination', destinationSchema);