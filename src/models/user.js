import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: {
    budget: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    travelStyle: [String],      // e.g. ['adventure', 'cultural', 'relaxation']
    climate: [String],          // e.g. ['tropical', 'cold']
    groupType: { type: String } // solo, couple, family, group
  },
  searchHistory: [{ type: String }],
  savedItineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);