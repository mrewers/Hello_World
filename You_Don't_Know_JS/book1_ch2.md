# YOU DON'T KNOW JAVASCRIPT INTRODUCTION
JS provides a `typeof` operator returns a string describing which of the six types a given value is. (NOTE: seventh type - "symbol" - added in ES6)

```js
  var a;
  typeof a;           // "undefined"

  a = "hello world";
  typeof a;          // "string"

  a = 42;
  typeof a;          // "number"

  a = true;
  typeof a;          // "boolean"

  a = null;
  typeof a;          // "object" -- weird, bug

  a = undefined;
  typeof a;          // "undefined"

  a = { b: "c" };
  typeof a;          // "object"
```

Variables do not have types, only their values do

## OBJECTS

An object is a compound value with a set of properties (named locations), each of which hold their own values of any type.

```js
var obj = {
	a: "hello world",
	b: 42
};
```

The values of each property can be accessed using dot notation:

```js
obj.a;     // "hello world"
```

or bracket notation (requires the use of a variable or string literal):

```js
obj["b"];  // 42
```

Dot notation is generally preferred.

Arrays and functions are subtypes of the object type:

### ARRAYS

Object that holds values in numerically indexed positions (start counting at 0).

```js
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
```

### BUILT-IN METHODS

There are built-in methods that operate on types and subtypes in a way that we can manipulate their properties.

For example:
```js
var a = "hello world";
var b = 3.14159;

a.length;          // 11
a.toUpperCase();   // "HELLO WORLD"
b.toFixed(4);      // "3.1416"
```

For these methods to work, each primitive type (ex. string) is wrapped in a corresponding native object (ex. String), which allows the method to execute.

## COMPARING VALUES

Values are compared for either equality or inequality, always returning a boolean value.

### EQUALITY
There are four equality operators: `==`, `===`, `!=`, and `!==`. The ! forms are of course the symmetric "not equal" versions of their counterparts.

The difference between `==` and `===` is that `==` checks for value equality with coercion allowed, and `===` checks for value equality without allowing coercion; `===` is often called "strict equality" for this reason.

Here are some simple rules:
  * If either value (aka side) in a comparison could be the true or false value, avoid `==` and use `===`.
  * If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid `==` and use `===`.
  * In all other cases, you're safe to use `==`.

Take special note of the comparison rules if you're comparing two non-primitive values, like objects. Because those values are actually held by reference, both `==` and `===` comparisons will simply check whether the references match, not anything about the underlying values. For example:

```js
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false
```

### INEQUALITY
The <, >, <=, and >= operators are used for inequality, referred to in the specification as "relational comparison." Can be used for strings as well as numbers.

## VARIABLES

Variable names must be a proper identifier and so must start with a-z, A-Z, $, or \_. It can then contain any of those characters plus the numerals 0-9.

The same rules apply to a property name, however, certain words cannot be used as variables, but are OK as property names. These words are called "reserved words," and include the JS keywords.

The `var` keyword declares a variable in the current function scope (or global scope if outside of a function).

### HOISTING
A variable is accessible anywhere within it's scope

### NESTED SCOPE
A variable is accessible to any lower/inner scope within that scope

```js
function foo() {
	var a = 1;

	function bar() {
		var b = 2;
		console.log( a, b );   // both a and b available to bar()
	}

	console.log( a );        // only a available outside of bar()
}
```

## CONDITIONALS

Switch cases are another option rather than a long series of if...else statements.

```js
switch (a) {
	case 2:
		// do something
		break;
	case 10:
		// do another thing
		break;
	case 42:
		// do yet another thing
		break;
	default:
		// fallback to here
}
```

If the case is satisfied, `break` ends the loop.

Ternary operators are another way to write an iff...else:

```js
var b = (a > 41) ? "hello" : "world";

// similar to:

if (a > 41) {
  b = "hello";
}
else {
  b = "world";
}
```

## STRICT MODE

Strict mode tightens the rules and can be enabled by adding `"use strict";` either to the top of your file (if you want it to apply to all of your JS) or just to particular functions.

## IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs)

Execute a function expression immediately upon declaring it:

```js
(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"
```

## CLOSURE

>You can think of closure as a way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.

## THIS

If a function has a `this` reference inside it, it usually points to an object. It does not refer to the function itself.

```js
function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// --------

foo();             // "global"
obj1.foo();        // "obj1"
foo.call( obj2 );  // "obj2"
new foo();         // undefined
```

## PROTOTYPE 

When you reference a non-existant property on an object, JavaScript will automatically use that object's internal prototype reference to find another object to look for the property on.

## POLYFILLS & TRANSPILING

Many browsers do not support the newest features of JavaScript, but you can still utilize them.

Polyfills add a check if newer capabilities exist, and if not a fall back to an older way of accomplishing the same effect.
Transpiling (transform and compile) allows you to write your code using new syntax and then convert it into code the browser can understand. 

## NON-JAVASCRIPT:

The most common non-JavaScript JavaScript you'll encounter is the DOM API. For example:

```js
var el = document.getElementById( "foo" );
```

>The document variable exists as a global variable when your code is running in a browser. It's not provided by the JS engine, nor is it particularly controlled by the JavaScript specification. It takes the form of something that looks an awful lot like a normal JS object, but it's not really exactly that. It's a special object, often called a "host object."
