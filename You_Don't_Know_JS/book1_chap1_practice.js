// VARIABLES

  a = 21; // Defines variable a
  b = a * 2; // Defines variable b as an expression of a multiplied by two
    console.log(b); // Prints variable b to the console resulting in the output '42'

  // Variables should always be formally declared (before they are used) using one of the below:
  var a = 42;

  let b = 2; // Block scoping declarations
  const c = 21; // Block scoping declarations

  function d() {}

// OUTPUTS-INPUTS

  // Commonly used outputs
  alert("Hello World"); // Commonly used output result in browser, but not part of JS
  console.log("Hello World"); // Most common way to print the results of your test

  age = prompt( "Please tell me your age:" ); // Provides user with input prompt
    console.log( age ); // Print's their response

// STATEMENT

  a = b * 2 + foo(c * 3); // Below add brackets to identify all the expressions
  [ [a] = [ [ [b] * [2] ] + [ [ foo ]( [[c] * [3]] ) ] ] ]; // Total of  11 expressions compose this statement

// OPERATORS

  // Shortcut operators
  a = a + 2;
  a += 2; // Same as the above expression

// COERCION

  // Method by which a string is converted into a number (and vice versa)
  var a = "42";
  var b = Number(a);
    console.log(a);   // Outputs "42" - string
    console.log(b);   // Outputs 42 - number

  var a = 42;
  var b = String(a);
    console.log(a);   // Outputs 42 - number
    console.log(b);   // Outputs "42" - string

  // Implicit coercion
  "99.99" == 99.99 // JS will implicitly coerce left-handed string to it's number equivalent

  a = 42;
  a = a + "";
    console.log(a); // JS will implicitly coerce the 42 into it's string equivalent

  // Coercing Booleans, if falsy - false, otherwise - true
  // "Falsy" values:
    0
    -0
    NaN
    ""
    false
    null
    undefined

// BLOCK

  // Pairing of curly brackets containing one or more statements
  {
    var a = 42;
    foo(a / 2);
  }
  // Won't get executed unless attached to something (conditional, loop, function)
