const db = require('../data/db-Config.js');
const server = require('./server.js');
const request = require('supertest');

beforeEach(async () => {
    await db('Golfers').truncate();
})

describe('server.js', () => {

    test('we are in the testing env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    describe('GET /', () => {
        let res;
        beforeEach(async () => {
            res = await request(server).get('/');
        });

        test('returns 200 ok', () => {
            return request(server)
            .get('/').then(res => {expect(res.status).toBe(200)});
        });

        test('returns 200 ok async', async () => {
            expect(res.status).toBe(200);
        });

        test('returns json type', async () => {
            expect(res.type).toBe('application/json');
        });

        test('returns {api:"up"}', async () => {
            expect(res.body).toEqual({api: 'Up'})
        })
    });
})

