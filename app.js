const express = require("express");
const cors = require ('cors');
const dbconnect = require("./config");
const app = express();

app.use(express.json());
app.use(cors({origin:'*'}));
app.use('/api/usuarios',require ('./routes/usuario.routes'));
app.use('/api/empleados',require ('./routes/empleado.routes'));
app.listen(3005, ()=> {
    console.log("El servidor está en el puerto 3005")
})

dbconnect();