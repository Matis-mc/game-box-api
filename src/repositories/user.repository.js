import User from '../models/user.model.js';

// Seule couche qui parle à MongoDB.
const userRepository = {
  findByEmail(email) {
    return User.findOne({ email: email.toLowerCase().trim() });
  },

  create(data) {
    return User.create(data);
  },
};

export default userRepository;
