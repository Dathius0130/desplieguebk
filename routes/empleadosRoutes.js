const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.get('/', empleadosController.getEmpleados);
router.get('/:id', empleadosController.getEmpleadoById);
router.post('/', empleadosController.createEmpleado);
router.put('/:id', empleadosController.updateEmpleado);
router.delete('/:id', empleadosController.deleteEmpleado);

module.exports = router;
