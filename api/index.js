const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./users')

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'This is not the endpoint you are looking for. Try another.' })
})

server.use('/api/users', userRouter)

module.exports = server
