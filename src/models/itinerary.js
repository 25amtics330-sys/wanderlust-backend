import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
  days: [{
    day: Number,
    activities: [String],
    accommodation: String,
    estimatedCost: Number
  }],
  totalBudget: Number,
  duration: Number,   // days
  generatedByAI: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Itinerary', itinerarySchema);