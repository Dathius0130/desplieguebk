// Importar módulos necesarios
const express = require('express');
const connectMongo = require('./config/db'); // Importar la función para conectar a MongoDB

// Crear una instancia de Express
const app = express();

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB al iniciar la aplicación
connectMongo()
  .then(db => {
    // Ejemplo de uso: Obtener una colección
    const empleadosCollection = db.collection('empleados');
    const tareasCollection = db.collection('tareas');

    // Ejemplo de ruta para obtener todos los empleados
    app.get('/empleados', async (req, res) => {
      try {
        const empleados = await empleadosCollection.find().toArray();
        res.json(empleados);
      } catch (err) {
        console.error('Error al obtener empleados:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    });

    // Ejemplo de ruta para obtener todas las tareas
    app.get('/tareas', async (req, res) => {
      try {
        const tareas = await tareasCollection.find().toArray();
        res.json(tareas);
      } catch (err) {
        console.error('Error al obtener tareas:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    });

    // Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });

  })
  .catch(err => {
    console.error('Error al conectar a MongoDB desde la aplicación Express:', err);
    process.exit(1); // Salir de la aplicación con error
  });
