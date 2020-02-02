const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(movie) {
    return db('movies')
        .insert(movie)
        .returning('id');
};

async function update(id, changes) {
    return null;
};

function remove(id) {
    return db('movies')
        .delete()
        .where({ id });
};

function getAll() {
    return db('movies');
};

function findById(id) {
    return null;
};