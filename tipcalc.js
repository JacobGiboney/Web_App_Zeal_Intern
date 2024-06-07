
//let billTot = 100
//let tipPer = 20


function calculateTip() {
    // Check if the inputs are valid numbers
    var billAmount = parseFloat(document.getElementById("totalBill").value)
    var tipPercentage = parseFloat(document.getElementById("tipPer").value)

    if (isNaN(billAmount) || isNaN(tipPercentage)) 
    {
        return "Please enter valid numbers for bill amount and tip percentage.";
    }

    var tipAmount = billAmount * (tipPercentage / 100);
    billAmount += tipAmount;
    document.getElementById("result").innerHTML = "Your total bill is: " + billAmount + "$";
    document.getElementById("result2").innerHTML = "Your total tip is: " + tipAmount + "$";

}
//console.log(calculateTip(billTot, tipPer));
console.log('hello');

