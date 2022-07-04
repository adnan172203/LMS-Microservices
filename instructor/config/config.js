module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'instructor-db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: '5432',
  },
  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'instructor-db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: '5432',
  },
};
