import 'dotenv/config';

const required = ['MONGODB_URI', 'JWT_SECRET'];
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Variable d'environnement manquante : ${key}`);
  }
}

export const port = process.env.PORT || 3000;
export const mongoUri = process.env.MONGODB_URI;
export const jwtSecret = process.env.JWT_SECRET;
