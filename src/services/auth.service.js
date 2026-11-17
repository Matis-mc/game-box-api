import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/env.js';
import userRepository from '../repositories/user.repository.js';
import HttpError from '../utils/httpError.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Pas d'expiration : jwt.sign sans option expiresIn.
function generateToken(user) {
  return jwt.sign(
    { id: user._id.toString(), nom: user.nom, prenom: user.prenom },
    jwtSecret
  );
}

const authService = {
  async signup({ nom, prenom, email, password }) {
    if (!nom || !prenom || !email) {
      throw new HttpError(400, 'nom, prenom et email sont requis');
    }
    if (!EMAIL_REGEX.test(email)) {
      throw new HttpError(400, 'Email invalide');
    }

    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw new HttpError(409, 'Un compte existe déjà avec cet email');
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userRepository.create({ nom, prenom, email, password: hash });

    return { token: generateToken(user) };
  },

  async login({ email, password }) {
    if (!email || !password) {
      throw new HttpError(400, 'email et password sont requis');
    }

    const user = await userRepository.findByEmail(email);
    const valid = user && (await bcrypt.compare(password, user.password));
    if (!valid) {
      throw new HttpError(401, 'Email ou mot de passe incorrect');
    }

    return { token: generateToken(user) };
  },
};

export default authService;
