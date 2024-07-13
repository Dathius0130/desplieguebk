const db = require('../config/db');

const Empleado = {
    getAll: (callback) => {
        const query = 'SELECT * FROM empleados2';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM empleados WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (data, callback) => {
        const query = 'INSERT INTO empleados SET ?';
        db.query(query, data, callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE empleados SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM empleados WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Empleado;
