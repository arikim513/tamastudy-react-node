module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,
  nodePort: process.env.NODE_PORT,
  nodeJWTSecret: process.env.NODE_JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  nodeMaster: process.env.NODE_MASTER,
};
