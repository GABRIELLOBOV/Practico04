export default class superheroes
{ 
    constructor (id, nombre , descripcion, completado = false)
    { 
        this.id = id; // Identificador único del superheroe
        this.nombre = nombre; // Nombre del superheroes
        this.descripcion = descripcion; // Descripción del superheroe
        this.completado = completado; // Estado de completado, por defecto es false 
    }
    
    // Método para marcar un superheroe como completo 
    completar() { 
                 this.completado  =  true; // Cambia el estado del superheroe
                } 
      
    // Método para validar que el nombre del superheroe no esté vacío 
    validar ()
     { 
        if (!this.nombre || this.nombre.trim() === '') 
            { 
                throw new Error('El nombre del superheroe es obligatorio.'); 
            } 
     }
    
} 
