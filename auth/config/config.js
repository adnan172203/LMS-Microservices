module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'auth-db',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres',
  port: '5432',
};