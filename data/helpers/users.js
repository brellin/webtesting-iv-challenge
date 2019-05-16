const db = require('../')

module.exports = {

    find: id => {
        const query = db('users')
        return id ? query.where({ id }).first : query
    },

    add: user => {
        return db('users').insert(user)
    },

}
