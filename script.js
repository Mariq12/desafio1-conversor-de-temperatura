// Conversor de temperatura
// Solicitar al usuario su nombre de usuario
var userName = prompt("Por favor, introduce tu nombre de usuario:");
// Convertir la primera letra en mayúscula
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

// Solicitar al usuario la temperatura en grados Celsius
var celsius = prompt(
  "Hola " +
    userName +
    "! Por favor, introduce la temperatura en grados Celsius:"
);

// Convertir la temperatura a grados Fahrenheit y Kelvin
var fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
var kelvin = parseFloat(celsius) + 273;

// Mostrar el resultado al usuario
alert(
  "Hola " +
    userName +
    "! " +
    "La temperatura de " +
    celsius +
    " grados Celsius corresponde a " +
    fahrenheit.toFixed(2) +
    " grados Fahrenheit y " +
    kelvin.toFixed(2) +
    " Kelvin."
);