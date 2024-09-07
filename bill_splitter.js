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

console.log(`Total tip for $${bill}: $${calculateTip(100)}`); // displays the total tip for a bill of $100

// Utilizing arrays with Data Set 1

let bills = [275, 40 ,430] // declare the array using test Data Set 1
const tips = bills.map(bill => calculateTip(bill)); // use the map method to create the array for tips

console.log(`The tips for the bill amounts are: ${tips}`); // display the tip amounts for the respective bill values

const totals = bills.map((bill, index) => bill + tips[index]); // use the map method to create the array for the sum of each bill

console.log(`The total bill values are: ${totals}`); //display the total of each bill

// Utilizing arrays with Data Set 2

let bills2 = [125, 555 , 44] // declare the array using test Data Set 1
const tips2 = bills2.map(bill => calculateTip(bill)); // use the map method to create the array for tips

console.log(`The tips for the bill amounts are: ${tips2}`); // display the tip amounts for the respective bill values

const totals2 = bills2.map((bill, index) => bill + tips2[index]); // use the map method to create the array for the sum of each bill

console.log(`The total bill values are: ${totals2}`); //display the total of each bill
