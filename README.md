# express-auth-api

API Express minimale (ES modules) : MongoDB (Mongoose), architecture controller → service → repository, signup/login avec JWT.

## Démarrage

```bash
npm install
cp .env.example .env   # puis adapter MONGODB_URI et JWT_SECRET
npm run dev
```

## Structure

```
src/
├── config/        env + connexion MongoDB
├── models/        schéma Mongoose
├── repositories/  accès aux données
├── services/      logique métier (validation, bcrypt, JWT)
├── controllers/   couche HTTP
├── routes/        déclaration des routes
├── middlewares/   gestion d'erreurs
└── utils/         HttpError
```

## Endpoints

### POST /api/auth/signup
```json
{ "nom": "Dupont", "prenom": "Jean", "email": "jean@example.com", "password": "Motdepasse1" }
```
→ `201 { "token": "..." }`

Règles du mot de passe : 8 caractères min, une minuscule, une majuscule, un chiffre.

### POST /api/auth/login
```json
{ "email": "jean@example.com", "password": "Motdepasse1" }
```
→ `200 { "token": "..." }`

Le JWT contient `id`, `nom` et `prenom`. Il n'expire pas.
