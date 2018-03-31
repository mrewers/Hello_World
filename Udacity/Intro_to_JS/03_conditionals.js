var price = 15.00;
var money = 20.00;

if(money >= price) {
  console.log('buy the hammer');
} else {
  console.log('don\'t buy the hammer');
}

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement

var number = 2;

if (number % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group")
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
  weapon = "knife";
  if(suspect === "Mr. Parkes") {
    solved = true;
  }
} else if (room === "gallery") {
  weapon = "trophy";
  if(suspect === "Ms. Van Cleve") {
    solved = true;
  }
} else if (room === "billiards room") {
  weapon = "pool stick";
  if(suspect === "Mrs. Sparr") {
    solved = true;
  }
} else {
  weapon = "poison";
  if(suspect === "Mr. Kalehoff") {
    solved = true;
  }
}

if (solved) {
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!' );
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
  return;
} else if (isActive === false){
  console.log("Your account is no longer active");
  return;
} else if (isActive === true && balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if(isActive === true && balance === 0) {
  console.log("Your account is empty");
} else if(isActive === true && balance < 0) {
  console.log("Your balance is negative. Please contact bank.");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "chocolate" || flavor === "vanilla") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
