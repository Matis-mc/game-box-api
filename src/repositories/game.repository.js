import Game from '../models/game.model.js';

// Seule couche qui parle à MongoDB.
const gameRepository = {
  findByIdUser(userId) {
    return Game.findOne({ userId: userId });
  },

  create(data) {
    return Game.create(data);
  },

  update(gameId, data) {
    return Game.findByIdAndUpdate(gameId, data, { new: true });
  }
};

export default gameRepository;