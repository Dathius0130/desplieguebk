const { MongoClient } = require('mongodb');

// URL de conexión a tu instancia de MongoDB
const url = 'mongodb+srv://opena:opena123@cluster0.kvqhyau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'eto';

// Crear una instancia de MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Conectar a MongoDB
async function connectMongo() {
    try {
        // Conectar al cliente de MongoDB
        await client.connect();
        console.log('Conexión establecida con la base de datos MongoDB...');

        // Seleccionar la base de datos
        return client.db(dbName);
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
        throw err;
    }
}

// Exportar la función para conectar a MongoDB
module.exports = connectMongo;
