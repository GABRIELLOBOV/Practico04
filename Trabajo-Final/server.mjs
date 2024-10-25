import express from 'express'; 
import
{ obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController,} 
from './controllers/superheroesController.mjs'; 


        
const app = express(); // Inicializamos una aplicación de Express 
const PORT = 3005; // Definimos el puerto en el que escuchará el servidor 

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON 
app.use(express.json()); 

// Rutas 

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController); 
app.get('/superheroes/poder/: poder/:habilidadEspecial', buscarSuperheroesPorAtributoController); app.get('/superheroes/edad/mayor A30', obtenerSuperheroesMayoresDe30Controller); 
// Levantar el servidor en el puerto 3005 
app.listen(PORT, () => { 

console.log(`Servidor corriendo en http://localhost:${PORT}`);  

}); 


