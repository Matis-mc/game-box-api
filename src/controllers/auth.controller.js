import authService from '../services/auth.service.js';

// Le controller ne gère que HTTP : lire la requête, appeler le service, répondre.
const authController = {
  async signup(req, res, next) {
    try {
      const result = await authService.signup(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};

export default authController;
