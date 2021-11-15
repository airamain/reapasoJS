// crear variables
// forma anterior 

//  var aperndiendo123;
//  aperndiendo123 = false;
//  aperndiendo123 = 20;
//  aperndiendo123 = "Juan";

// var tarea;

// tarea = "aprendiendo JS";

//  console.log(tarea)


// Forma nueva
// variables con const y let
// // siempre darle valor de inicio
//  const Tarea = "Amprender javaScritp";
//  console.log("Nuestra Tarea =>",Tarea); 
// let es similar a var, y se puede inicializar vacio
//  let aperndiendo123;
//  aperndiendo123 = false;
//  aperndiendo123 = 25;
//  aperndiendo123 = "Jose"
//  console.log(aperndiendo123)


// Template strings 
// let nombre = "Emanuel";
// let apellido = "Perez";
// let trabajo = "Developer";
// let DNI = 986565325
// concatenar string
// console.log('Nombre: ' + nombre + " Apellido: " + apellido + " Trabaja: " + trabajo)

//lo nuevo alt+96 =>` `
// console.log(`Nombre: ${nombre} Apellido: ${apellido} trabajo: ${trabajo} DNI: ${DNI}`)

// const nombre = "Juan";
// const apellido = "Perez";
// let trabajo = "developer web";
// const DNI = 32656587;
// let miDireccion = "Vivo en mi casa";
// // Ejemplo de Dom forma anterior
// const contenedorApp = document.querySelector('#app');

// let html = '<ul>' +
//     '<li> Nombre: ' + nombre + '</li>' +
//     '<li> Apellido ' + apellido + '</li>' +
//     '<li> Trabajo: ' + trabajo + '</li>' +
//     '</ul>';

//  contenedorApp.innerHTML = html;


// ejemplo de Dom con template strings
// let html2 = `
// <ul>
// <li> Nombre: ${nombre} </li>
// <li> Apellido: ${apellido} </li>
// <li> DNI: ${DNI} </li>
// <li> Trabajo: ${nombre} </li>
// <li> Dirección: ${miDireccion} </li>
// </ul>
// `;

// contenedorApp.innerHTML = html2;


// AHORA FUNCIONES

// saludar("Pedro")
// Function declaration
// saludar()
// function saludar() { console.log("Estoy saludando"); }


// function expresion 
// const cliente = function (nombreCliente) {
//     //  console.log("Mostrando datos del cliente," + nombreCliente)
//     console.log(`Mostrando datos del cliente, ${nombreCliente}`)
// }
// cliente('Adrian')


// Funsiones con parametros Parametros 
// function actividad(nombre, actividad) {
//     console.log(`El alumno ${nombre}, esta realizando la actividad ${actividad}`);
// }
// actividad('Adrian');

// que pasa si llamamos a la funcion y no le pasamos los parametro ?
// Parametros por default
// function actividad(nombre = 'Walter White', actividad = 'Profesor Quimica') {
//      console.log(`El alumno ${nombre}, esta realizando la actividad ${actividad}`);
// }
// actividad('Gamer PRO')

// FUNCTION expresion
// const actividad = function(nombre = 'Walter White', actividad = 'Profesor Quimica'){
//     console.log(`El alumno ${nombre}, esta realizando la actividad ${actividad}`);
// }
// actividad('Manuel')
// Arrow Function, son functios expresion mas simplificadas

// let viajando = (destino, duracion = 'MINIMO 15 DIAS') => `
// Viajando a: ${destino}
// Durante: ${duracion}
// `;

// let viaje = viajando('PARIS')

// viaje = viajando('Paris')
// viaje = viajando('Londres')

// console.log(viaje);


/////////////////////////////// IMPORTANTE //////////////////////////////////////////////////////////////////
// TEMA OBJETOS
// CREAR, mas comun y menos flexible es Object Literal
// let nombrePersona = 'Adrian';
// let profesion = 'Dev Web';

// console.log(nombrePersona);
// console.log(profesion);

// cramos un objeto (literal estatico)

// const persona = {
//     nombre: 'Adrian',
//     profesion: 'Dev Web'
// }

// // acceder a cada atributo del objeto
//  console.log(persona);
//  console.log(persona["nombre"]);


// cuando tenemos la necesidad de tener mas objetos en este caso tipo persona
// o personas con diferentes o mas valores
// vamos a usar object contructor

// function Tarea(aprender, prioridad) {
//     this.aprender = aprender;
//     this.prioridad = prioridad;
// }
// // crear una nueva tarea

// // ventaja de esta forma de crear objetos es que podemos tener copias del mismo
// // y cambiar valores

// const tarea1 = new Tarea('Aprender JS y React', 'Urgente')
// const tarea2 = new Tarea('Aprender JS y React', 'Urgente')
// const tarea3 = new Tarea('Prepara Cafe', 'Urgente')
// const tarea4 = new Tarea('Pasear al perro', 'Media')

// console.log("tarea1: ",tarea1);
// console.log("tarea2: ",tarea2);
// console.log("tarea3: ",tarea3);
// console.log("tarea4: ",tarea4);

