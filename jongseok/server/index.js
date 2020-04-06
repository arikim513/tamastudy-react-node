require('dotenv').config({ path: './.env' });
// env val
const keys = require('./keys');
// library file require
const path = require('path');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
// local file require
const mongoClient = require('./src/database/mongoDB');
const v1Route = require('./src/routes/v1');
const errorResponse = require('./src/middleware/errorResponse');

// 1. database 연결
mongoClient();

const app = express();

// 2. middleware
app.use(helmet());
app.use(xss());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(mongoSanitize());
// windowsMs (시간)마다 max개의 리퀘스트를 받을 수 있도록 제한
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10분
  max: 100000,
});
app.use(limiter);
app.use(hpp());

// static folder 설정
app.use(express.static(path.join(__dirname, 'public')));

// 3. Routes
app.use('/v1', v1Route);

// 4. error response middleware
app.use(errorResponse);

// 5. server listen
const PORT = keys.nodePort || 5000;
const MASTER = keys.nodeMaster || 'JONGSEOK';
app.listen(PORT, () => {
  console.log(`${MASTER}의 서버에 접속했습니다. ${PORT}번 포트로 연결 되었습니다.`.bgWhite);
});
