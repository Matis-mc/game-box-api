import gameRepository from '../repositories/game.repository.js';

const gameController = {
  async createGame(req, res) {
    try {
      const { titre, plateforme, langue, complet, condition, description, genre} = req.body;
      const userId = req.params.user_id; // Assuming you have user authentication and the user ID is available in req.user

      const newGame = await gameRepository.create({
        titre,
        plateforme,
        langue,
        complet,
        condition,
        description,
        genre,
        userId
      });

      res.status(201).json(newGame);
    } catch (error) {
      console.error('Error creating game:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getGamesByUser(req, res) {
    try {
      const userId = req.params.user_id; // Assuming you have user authentication and the user ID is available in req.user

      const games = await gameRepository.findByIdUser(userId);

      if (!games) {
        return res.status(404).json({ message: 'No games found for this user' });
      }

      res.status(200).json(games);
    } catch (error) {
      console.error('Error fetching games:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateGame(req, res) {
    try {
      const gameId = req.params.id;
      const { title, plateforme, langue, complet, condition, description, genre } = req.body;

      const updatedGame = await gameRepository.update(gameId, {
        title,
        plateforme,
        langue,
        complet,
        condition,
        description,
        genre
      });

      if (!updatedGame) {
        return res.status(404).json({ message: 'Game not found' });
      }

      res.status(200).json(updatedGame);
    } catch (error) {
      console.error('Error updating game:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default gameController;