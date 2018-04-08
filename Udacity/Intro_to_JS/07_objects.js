/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    },
};

/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function() {
    return "Welcome!\nYour balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%.";
  }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

 var facebookProfile = {
  name: "Marek",
  friends: 5,
  messages: ["yo", "hey", "what up?"],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function(){
    this.friends++;
  },
  removeFriend: function(){
    this.friends--;
  }
};

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
