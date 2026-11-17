import { port } from './config/env.js';
import {connectDb} from './config/db.js';
import app from './app.js';

async function start() {
  await connectDb();
  app.listen(port, () => console.log(`Serveur démarré sur http://localhost:${port}`));
}

start().catch((err) => {
  console.error('Échec du démarrage :', err);
  process.exit(1);
});
