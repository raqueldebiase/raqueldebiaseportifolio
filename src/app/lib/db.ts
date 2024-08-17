import { Client } from 'pg';

// Obtenha a URL de conexão do banco de dados do ambiente
const connectionString = process.env.POSTGRES_URL;

// Crie um cliente de conexão com o PostgreSQL
const client = new Client({
  connectionString,
});

// Conecte ao banco de dados
client.connect().catch(err => console.error('Connection error', err.stack));

// Exportar o cliente para uso em outras partes da aplicação
export default client;
