const db = require('../')
const Users = require('./users')

describe('users helper', () => {

    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('find()', () => {

        it('should return an empty array', async () => {

            const get = await db('users')

            expect(get.toString()).toBe('')

        });

        it('should return an id if exists', async () => {

            const user = {
                username: 'someone',
                password: 'something'
            },
                post = await Users.add(user),
                get = await Users.find(post.id)

            expect(get).toEqual([{
                ...user,
                id: 1
            }])
        });

    });

    describe('add()', () => {

        it('should return the full user, to include id', async () => {
            const user = {
                username: 'someone',
                password: 'something'
            }

            await Users.add(user)

            const users = await db('users')

            expect(users).toHaveLength(1)
        })

    })

})