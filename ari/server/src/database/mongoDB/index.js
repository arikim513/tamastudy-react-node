const keys = require('../../../keys');
const mongoose = require('mongoose');

const MONGO_URI = keys.mongoURI;

const mongoClient = async () => {
  try {
    console.log('test', MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('DB접속 완료');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = mongoClient;
