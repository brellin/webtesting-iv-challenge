require('dotenv').config()

const port = process.env.PORT || 5000
const server = require('./api')

server.listen(port, () => {
    console.log(`\n===================================\n ** Server running on port ${port} ** \n===================================\n`)
})
