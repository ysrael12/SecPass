import { Sequelize} from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obter o __dirname com ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do arquivo do banco de dados SQLite
const dbPath = path.join(__dirname, 'database.sqlite');

// Conectando ao banco de dados SQLite
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging : false
});

// Definindo o modelo de usuário

// Sincronizando o modelo com o banco de dados
(async () => {
  try {
    await sequelize.sync(); // Cria o banco de dados se não existir
  } catch (error) {
    console.error('Unable to create the database:', error);
  }
})();
