// Task 1 Calculate the Tip

// Declaration of bill
let bill = 100;

let tip = 0;

// Calculation of tip based on bill size using if-else statements

if (bill >= 50 && bill <= 300) {
    tip = 0.15;
    tip = bill * tip;
    console.log(`The tip amount is: $${tip}`); //Displays 15% tip if bill is between $50 and $300
}

else {
    tip = 0.20;
    tip = bill * tip;
    console.log(`The tip amount is: $${tip}`) ; //Displays 20% tip if greater than 300
}


// Displaying Total bill (initial bill + tip)

totalBill = bill + tip; //Calculate total bill by adding the bill amount and tip amount 

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${totalBill}`); //displays the initial bill, tip amount and final value of bill after the tip is added

// Creation of Function to calculate the tip

function calculateTip (bill){
    let tip = (bill >= 50 && bill<= 300) ? 0.15 : 0.20;   // declaring function to determine whether bill is between 50 and 300, if it is, it will use 15%, anything above will use 20
    return bill * tip;    
}

console.log(`Total tip for $${bill}: $${calculateTip(100)}`) // displays the total tip for a bill of $100


