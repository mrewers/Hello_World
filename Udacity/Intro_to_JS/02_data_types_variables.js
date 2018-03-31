"Marek"

alert("Marek")

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// To use JS on a web page, go to https://daringfireball.net/projects/markdown/. Add below snippets to console

// Changes h1 element to red
document.getElementsByTagName("h1")[0].style.color = "#ff0000";

// Adds cat gif to the top of the page
document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner");
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

// NUMBERS
3 // returns 3

// Arithmatic operators
3 + 2.1 // returns 5.1

2 + 10 - 19 + 4 -90 + 1 // returns -92

-20 + -19 - (-10) - (-1) + 24 // returns -4

(10/5) * 4 - 20 // returns -12

4096 % 12 // returns 4

// Comparing numbers
5 > 10 // returns false

5 < 10 // returns true

5 == 10 // returns false

43 > 47 // returns false

12 == 17 // returns false

3 <= 3 // returns true

1 != 0 // returns true

// Quiz - Write an expression that uses at least 3 different arithmetic operators. The expression should equal 42.
console.log( 10 * 5 - 8 / 1);

// STRINGS

"Hello " + "World" // returns Hello World

"Hello 10*5" // returns Hello 10*5

"Hello" + 10*5 // returns Hello50

// VARIABLES
var greeting = "Hello";
greeting + " World!"; // returns Hello World!
greeting + "Mike!"; // returns Hello Mike!

greeting = "Hola"; // reassigns the variable greeting to a new string value
greeting + " World!"; // returns Hola World!

// Quiz Converting Temperature
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32 // convert celsius to fahrenheit here

console.log(fahrenheit + " degrees Fahrenheit"); // print out result here

// Quiz - concat the lines of this poem to form an haiku
var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east."
console.log(haiku);

// Quiz
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + " " + thingTwo);

// Create variable fullName and assign it a value
var fullName = "Marek Rewers";

/* Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15.
 * Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate.
 * Finally, add the bill and tip together and store it into a variable called total. */
var bill = (10.25 + 3.99 + 7.15);
var tip = 0.15 * bill;
var total = bill + tip;
console.log(total);

/* For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
 * The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
 * Assign the resulting string to a variable called madLib. */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);

/* Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
 * Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable.
 * Finally, print your awesome message to the JavaScript console. */
 var firstName = "Marek";
 var interest = "history";
 var hobby = "code";

 var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
 console.log(awesomeMessage);
