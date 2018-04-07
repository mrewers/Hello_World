/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh() {
  return "hahahahahahahahahaha!"
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
  var ha = "";
  for ( var x = 0; x < num; x++ ) {
    ha +="ha";
    string = ha + "!";
  }
  return string;
}

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(lines) {
  var triangle = ""
  for ( var x = 1; x <= lines; x++ ){
    var currentLine = makeLine(x);
    triangle += currentLine;
  }
  return triangle;
}

// test your code by uncommenting the following line
//console.log(buildTriangle(10));

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  var has = "";
  for ( x = 0; x < num; x++) {
    has += "ha";
  }
  return has + "!";
}

console.log(laugh(10));

/*
 * Programming Quiz: Cry (5-5)
 */

var cry = function weep() {
  return("boohoo!");
}

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num) {
  var has = "";
  for ( x = 0; x < num; x++) {
    has += "ha";
  }
  return has + "!";
})
