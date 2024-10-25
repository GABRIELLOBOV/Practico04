// Importa la capa de persistencia (repositorio) 
import superheroesRepository from '../repository/superheroesRepository.mjs'; 


// Instancia el repositorio para manejar las superheroes 
const superheroesRepo = new SuperheroesRepository(); 

// Servicio para obtener Todos las superheroes 
export function obtenerSuperheroesPorId(id) { 
    const superheroes = repository.obtenerTodos();
    return superheroes.find(superheroes => superheroes.id === id);

}
export function buscarSuperheroesPorAtributo (poder, habilidadEspecial) { 
} 
const superheroes = repository.obtenerTodos(); 
return superheroes.filter (hero =>  
String (hero [atributo]).toLowerCase().includes (valor.toLowerCase()) 
);
export function obtenerSuperheroesMayoresDe30() { 
const superheroes = repository.obtenerTodos(); return superheroes. filter (hero => 
hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2 

); 
} 
