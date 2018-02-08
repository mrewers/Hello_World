# YOU DON'T KNOW JAVASCRIPT INTRODUCTION
Notes and practice examples from You Don't Know JS book 1 (Up & Going)
Also includes notes from the Front End Masters course Intro to JS
taught by Kyle Simpson

## VARIABLES

```js
  a = 21; // Defines variable a
  b = a * 2; // Defines variable b as an expression of a multiplied by two
    console.log(b); // Prints variable b to the console resulting in the output '42'
```

Variables should always be formally declared (before they are used) using one of the below:
```js
  var a = 42;

  let b = 2; // Block scoping declarations (ES6)
  const c = 21; // Block scoping declarations (ES6)

  function d() {} // Declaring variable d as a function
```

## OUTPUTS-INPUTS

Commonly used outputs

```js
  alert("Hello World"); // Commonly used output result in browser, but not part of JS
  console.log("Hello World"); // Most common way to print the results of your test

  age = prompt( "Please tell me your age:" ); // Provides user with input prompt
    console.log( age ); // Print's their response
```

## STATEMENT

```js
  a = b * 2 + foo(c * 3); // Below add brackets to identify all the expressions
  [ [a] = [ [ [b] * [2] ] + [ [ foo ]( [[c] * [3]] ) ] ] ]; // Total of  11 expressions compose this statement
```

## OPERATORS

Shortcut operators
```js
  a = a + 2;
  a += 2; // Same as the above expression
```

## COERCION
Method by which a string is converted into a number (and vice versa)

```js
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
```

## FUNCTIONS
Block of code that groups several tasks that you can call it to run whenever you like

Can be declared as:
```js
  function foo() {} // function declaration

  var bar = function() {} // function expressions attached to function declarations
  var bar = function baz() {}

  var a = 10;
  function foo(){
  	a = a * 2;
  	a = a + 3;
  };
  foo();
  console.log(a); // returns 23
  foo();
  foo();
  console.log(a); // returns 101

  // Passing a parameter
  var a = 10;
  function bar(b) { // b is a parameter, as it is declared
    a = a * 2;
    a = a + b;
  };
  bar(100);         // 100 is an argument
  console.log(a);
```

## BLOCK

Pairing of curly brackets containing one or more statements
```js
  {
    var a = 42;
    foo(a / 2);
  }
  // Won't get executed unless attached to something (conditional, loop, function)
```

## IF STATEMENT

Must pass a boolean value, if not passed it must be inferred

```js
  if (a > 10) {
    b = 5;
    foo(a/b)
  }
```

Inferring Booleans, if falsy - false, otherwise - true
"Falsy" values:

```js
    0
    -0
    NaN
    ""
    false
    null
    undefined

  var a = 10;
  if (a) {      // a is inferred to be true, since 10 is not falsy
    a = a * 2;
  }
```

## LOOPS

Runs until something stops it from running

```js
  while (a > 10) {...}

  for (a = 5; a < 10; a++ ) { // Three (optional) parts: initiation expression, conditional expression, update clause
    console.log(a)
  }
```

This loop returns:
  5
  6
  7
  8
  9

Conceptually the above for loop is the same as running the below while loop:

```js
  a = 5;
  while (true) {
    if (a >= 10) {
      break;
    }
    console.log(a);
    a = a + 1;
```

## SCOPE
You can always reference outside of your scope but not inside of a scope
