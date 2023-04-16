//CADENA DE TEXTO CON MI NOMBRE
let nombre = 'Francisco Javier';

//CADENA DE TEXTO APELLIDO
let apellido = ' Ruiz Luna';

//CADENA DE TEXTO ESTUDIANTE
let estudiante = nombre + apellido;
console.log(estudiante);

//CADENA DE TEXTO ESTUDIANTE MAYUS
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//CADENA DE TEXTO ESTUDIANTE MINUS
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

//VARIABLE DE NUMERO DE LETRAS
let numeroDeLetras= estudiante.length;
console.log(numeroDeLetras);

//VARIABLE PRIMERA LETRA DEL NOMBRE
let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

//VARIABLE ULTIMA LETRA APELLIDO
let ultimaLetraAppellido = apellido.slice(-1);
console.log(ultimaLetraAppellido);

//CADENA ELIMINA ESPACIOS
let eliminaEspacios = estudiante.replace(/\s+/g,'');
console.log(eliminaEspacios);

//VARIABLE BOOLEANA
let booleana = estudiante.includes(nombre);
console.log(booleana);