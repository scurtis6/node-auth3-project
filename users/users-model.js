const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findDept
}

function find() {
    return db('users')
    .select('id', 'username', 'password', 'department')
};

function findBy(filter) {
    return db('users')
    .where(filter)
};

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id)
};

function findDept(department) {
    return db('users')
    .select('id', 'username', 'department')
    .where('department', department)
}