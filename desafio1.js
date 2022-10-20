// Declarar una clase Usuario
class Usuario {
    constructor (nombre, apellido){ //Usuario cuenta con los siguientes atributos
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    //Retorna el nombre completo del usuario.
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
     }

     //Recibe un nombre de mascota y lo agrega al array de mascotas.
     addMascota = (nombreMascota) => {
        return this.mascotas.push(nombreMascota);
    }

    //Retorna la cantidad de mascotas que tiene el usuario.
    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){ //Agrega un objeto al array de libros.
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
   getBookNames = () => { //Retorna un array con sólo los nombres del array de libros del usuario.
        return this.libros.map(libro => (libro.nombre)) //Mediante el método map consigo un nuevo array.
    }

}

const usuario = new Usuario("Gregorio", "Samsa") //Creo al usuario.

console.log(`El nombre completo del usuario es ${usuario.getFullName()}`) 

usuario.addMascota("Alf") //Recibe dos nombres de mascota y los agrega al array.
usuario.addMascota("Canela")

console.log(`El usuario tiene ${usuario.countMascotas()} mascotas`)

usuario.addBook("Bajo el cielo del sur", "Antonio Santa Ana")
usuario.addBook("El Perfume", "Patrick Süskind")

console.log(`Los libros del usuario son ${usuario.getBookNames()}`)