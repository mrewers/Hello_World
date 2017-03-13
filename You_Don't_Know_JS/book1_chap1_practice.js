//Variables

a = 21; // Defines variable a
b = a * 2; // Defines variable b as an expression of a multiplied by two
console.log(b); // Prints variable b to the console resulting in the output '42'

//INPUTS

age = prompt( "Please tell me your age:" ); // Provides user with input prompt
console.log( age ); // Print's their response

// COERCION
// Method by which a string is converted into a number

var a = "42";
var b = Number( a );

console.log( a );   // Outputs "42" - string
console.log( b );   // Outputs 42 - number

// Implicit coercion

"99.99" == 99.99 // JS will implicitly coerce left-handed string to it's number equivalent
