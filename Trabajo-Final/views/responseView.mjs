// Función para renderizar una lista de Superheroes en formato JSON 
export function renderizarListaSuperheroes (Superheroes) { 
    // Formatea el array de Superheroes en formato JSON con indentación 
    return JSON.stringify(Superheroes, null, 2); 
    } 
    // Función para renderizar un mensaje genérico en formato JSON 
    export function renderizarMensaje (mensaje) { 
    // Envuelve un mensaje en formato JSON 
    return JSON.stringify({ mensaje }, null, 2); 
    } 
    // Función para renderizar un Superheroes específica en formato JSON 
    export function renderizarSuperheroes (Superheroes) { 
    // Formatea un Superheroe individual en formato JSON con indentación 
    return JSON.stringify(Superheroes, null, 2); 
    } 
    