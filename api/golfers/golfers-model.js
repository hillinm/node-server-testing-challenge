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

function insert(newGolfer) {
    return db('Golfers').insert(newGolfer);
}

function remove(id) {
    return db('Golfers').where({ id }).delete();
}