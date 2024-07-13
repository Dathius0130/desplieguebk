const db = require('../config/db');

const Tarea = {
    getAll: (callback) => {
        const query = 'SELECT * FROM tareas';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM tareas WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (data, callback) => {
        const query = 'INSERT INTO tareas SET ?';
        db.query(query, data, callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE tareas SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM tareas WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Tarea;
