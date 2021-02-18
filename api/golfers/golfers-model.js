const db = require('../../data/db-Config.js');

module.exports = {
    find,
    findById,
    insert,
    remove
}

function find() {
    return db('Golfers');
}

function findById(id) {
    return db('Golfers').where({ id }).first();
}

async function insert(newGolfer) {
    const [id] = await db('Golfers').insert(newGolfer, 'id');
    return await db('Golfers').where({id}).first();
}

function remove(id) {
    return db('Golfers').where({ id }).delete();
}