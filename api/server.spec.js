const request = require('supertest')
const server = require('./')

describe('server.js', () => {

    describe('GET /', () => {

        it('should return status 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        });

    });

    describe('GET /api/users', () => {

        it('should return 200 ok', async () => {
            const res = await request(server).get('/api/users')

            expect(res.status).toBe(200)
        });

    });

});
