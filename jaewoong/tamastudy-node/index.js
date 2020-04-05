const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const router = require('./routes/index')
const errorResponse = require('./middlewares/errorResponse')
const colors = require('colors')
const app = express()

//! env
const PORT = process.env.PORT || 5000
const MASTER = process.env.NAME || 'TAMASTUDY'

//! log middleware
app.use(morgan('dev'))

//! Route
app.use(router)

//! error response middleware
app.use(errorResponse)

//! running backend server
app.listen(PORT, () => {
    console.log(`${MASTER}의 서버에 접속하셨습니다.${PORT}번 포트로 연결 되었습니다.`.rainbow)
})
