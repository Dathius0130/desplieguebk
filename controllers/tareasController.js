const Tarea = require('../models/tareaModel');

const getTareas = (req, res) => {
    Tarea.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const getTareaById = (req, res) => {
    const id = req.params.id;
    Tarea.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const createTarea = (req, res) => {
    const data = req.body;
    Tarea.create(data, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(results);
        }
    });
};

const updateTarea = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Tarea.update(id, data, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

const deleteTarea = (req, res) => {
    const id = req.params.id;
    Tarea.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getTareas,
    getTareaById,
    createTarea,
    updateTarea,
    deleteTarea
};
