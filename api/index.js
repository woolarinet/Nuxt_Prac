const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const {users, cla, sax} = require('./models')

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 라우팅 등록
const user = require('./user')
const product = require('./product')
const board = require('./board')

app.use('/user', user)
app.use('/product', product)
app.use('/board', board)

module.exports = {
    path: '/api',
    handler: app
}
