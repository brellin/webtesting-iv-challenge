const router = require('express').Router()

const Users = require('../../data/helpers/users')

router.get('/', async (req, res) => {
    try {
        const get = await Users.find()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const { body } = req
    if (body && body.username && body.password) {
        try {
            const post = await Users.add(body),
                get = await Users.find()
            res.status(200).json(get)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(403).json({
            error: 'You must include a username AND password.'
        })
    }
})

module.exports = router
