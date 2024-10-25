import fs from 'fs'; // Importamos el módulo del sistema de archivos de Node.js 
import path from 'path'; // Módulo para manejar rutas de archivos 
import { fileURLToPath } from 'url'; // Para obtener la ruta del archivo actual 
// Importamos la interfaz de persistencia 

import superheroesDataSource from '../superheroesDataSource.mjs'; 
import superheroes from '../models/superheroes.mjs'; // Importamos el superheroe
const __filename = fileURLToPath (import.meta.url); 
const __dirname = path.dirname(__filename); 
filePath = path.join(__dirname, '../superheroes.txt'); 
// Implementación concreta que extiende la interfaz superheroesDataSource
 export default class superheroesRepository extends superheroesDataSource { 
constructor() { 
super(); // Llamada al constructor de la clase base
this.filePath = path.join(__dirname, '../superheroes.txt');
} 
 
// Implementación del método obtener Todos () 
obtenerTodos () { 
    try { 
        // Leer el archivo de texto en formato UTF-8 
        const data = fs.readFileSync (filePath, 'utf-8'); 
        // Convertir el contenido del archivo en un array de objetos JSON const superheroes = JSON.parse(data); 
        // Convertir cada superheroes en una instancia de la clase de superheroes 
        return superheroes.map(superheroesData => new superheroe( 
        superheroesData.id, 
        superheroesData.titulo, 
        superheroesData.descripcion, 
        superheroesData.completado
     ));
} catch (error) { 
// Si ocurre un error, como que el archivo no exista, devolvemos un array vacío 
    console.error('Error al leer el archivo de  superheroes:', error); 
    return []; 
} 
} 
// Implementación del método guardar () 
guardar (superheroes) { 
try { 
    // Convertimos el array de uperheroes a una cadena JSON con indentación de 2 espacios 
    const data = JSON.stringify(uperheroes, null, 2); 
    // Guardar la cadena JSON en el archivo de texto 
    fs.writeFileSync(filePath, data, 'utf-8'); 
    } catch (error) { 
    // Si ocurre un error al guardar los datos, mostramos el error 
    console.error('Error al guardar las tareas:', error); 
} 
} 
// Implementación del método eliminar () 
eliminar (id) { 
try { 
const superheroes = this.obtenerTodos(); // Obtener todos los superheroes 
// Filtrar superheroes por ID 
const superheroesActualizados = superheroes.filter(superheroes => superheroes.id !== id); 
this.guardar (superheroesActualizados); // Guardar la lista actualizada 
 
} catch (error) { 
console.error('Error al eliminar el superheroe:', error); 

} 
} 
}  