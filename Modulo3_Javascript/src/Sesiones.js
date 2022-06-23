// console.log(Symbol("hello") === Symbol("hello"));
// console.log("Hooooola");
// const name = "Eduardo";
// const message = `Hola ${name}`;
// console.log(message);

// // Objetos
// const person = { name: "john" };
// person.country = { id: 5, name: "Spain" };
// person["hola"] = "prueba";

// person.saludo = function () {
//   console.log("Hola soy un objeto");
// };

// //console.log("Señor: " + person.name);
// //person.saludo();

// for (const key in person) {
//   console.log(key, person[key]);
// }

// delete person.country.name;

// Arrays
// const collection = ["hey", "hola", "let's go"];

// console.log(collection[2]);

// collection.push("añado");

// collection.forEach((value) => {
//   console.log(value);
// });

// Funciones
// Clásicas
// function toUpper(text) {
//   return text.toUpperCase();
// }

// const toUpper2 = function (text) {
//   return text.toUpperCase();
// };

// console.log(toUpper("minusculas"));

// // Flecha
// const toUpper3 = (text) => text.toUpperCase();

// const toObject = (name, surname, age) => ({ name, surname, age });

// function suma() {
//   let total = 0;
//   for (const num of arguments) {
//     total += num;
//   }
//   return total;
// }

// console.log(suma(1, 2, 3));

// Closure

// destructuring
// en objetos
// const student = {
//   name: "Antonio",
//   surname: "Tobajas",
//   country: {
//     id: 21,
//     name: "Spain",
//     iso3: "SPA",
//   },
// };

// const {
//   name: studentName,
//   surname,
//   country: { iso3, name: countryName },
// } = student;

// const getName = ({ name }) => name;

// //console.log(studentName, surname, iso3, countryName);
// //console.log(getName(student));

// //en arrays
// const students = ["Antonio", "Miguel Angel", "Dennise"];

// const [elementoUno, , elementoTercero] = students;

// const getSegundo = ([, elementoSegundo]) => elementoSegundo;

// console.log(elementoTercero);
// console.log(getSegundo(students));

// // Rest, Spread - (...)
// console.log("Rest");
