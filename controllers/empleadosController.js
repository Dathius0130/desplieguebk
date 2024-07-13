const Empleado = require('../models/empleadoModel');

const getEmpleados = (req, res) => {
    Empleado.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const getEmpleadoById = (req, res) => {
    const id = req.params.id;
    Empleado.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const createEmpleado = (req, res) => {
    const data = req.body;
    Empleado.create(data, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(results);
        }
    });
};

const updateEmpleado = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Empleado.update(id, data, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const deleteEmpleado = (req, res) => {
    const id = req.params.id;
    Empleado.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
};
