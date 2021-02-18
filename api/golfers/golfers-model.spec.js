const Golfer = require('./golfers-model.js');
const db = require('../../data/db-Config.js');

beforeEach(async () => {
    await db('Golfers').truncate();
})

describe('Golfers model', () => {
    describe('inserts method', () => {
        test('inserts the golfer', async () => {
            await Golfer.insert({name: 'Tiger Woods'});
            await Golfer.insert({name: 'Bryson DeChambeau'});

            const golfer = await db('Golfers');
            expect(golfer).toHaveLength(2);
        });

        test('returns the golfer inserted', async () => {
            let golfer = await Golfer.insert({name: 'Tiger Woods'});
            expect(golfer.name).toBe('Tiger Woods');

            golfer = await Golfer.insert({name: 'Bryson DeChambeau'});
            expect(golfer.name).toBe('Bryson DeChambeau');
        })
    })
})