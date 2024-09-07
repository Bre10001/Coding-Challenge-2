// Task 1 Calculate the Tip

// Declaration of bill
let bill = 100;

let tip = 0;

// Calculation of tip based on bill size using if-else statements

if (bill > 300) {
    tip = 0.20;
    tip = bill * tip;
    console.log(`The tip amount is: $${tip}`) ; //Displays 20% tip if greater than 300
}

else if (bill >= 50 && bill <= 300) {
    tip = 0.15;
    tip = bill * tip;
    console.log(`The tip amount is: $${tip}`); //Displays 15% tip if bill is between $50 and $300
}

else {
    console.log(`Tips are appreciated!`);
}

// Displaying Total bill (initial bill + tip)

totalBill = bill + tip; //Calculate total bill by adding the bill amount and tip amount 

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${totalBill}`); //displays the initial bill, tip amount and final value of bill after the tip is added





