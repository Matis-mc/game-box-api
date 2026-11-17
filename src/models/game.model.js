import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true},
    plateforme: { type: String, required: true},
    langue: { type: String, required: true},
    complet: { type: String, required: true},
    condition: { type: String, required: true},
    description: { type: String, required: false},
    genre: { type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateAjout: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('Game', gameSchema);