/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */
// Exchange rate object storing conversion values
const rates = {
  DKK: { USD: 0.14, EUR: 0.13, DKK: 1 }, // DKK conversion rates
  USD: { DKK: 7.1, EUR: 0.92, USD: 1 }, // USD conversion rates
  EUR: { DKK: 7.5, USD: 1.09, EUR: 1 }, // EUR conversion rates
};

// Function to perform currency conversion
function convertCurrency() {
  let amount = document.getElementById("amount").value; // Get input amount
  let from = document.getElementById("fromCurrency").value; // Get selected from currency
  let to = document.getElementById("toCurrency").value; // Get selected to currency

  if (amount && !isNaN(amount)) {
    // Check if the amount is valid
    let converted = amount * rates[from][to]; // Perform currency conversion
    document.getElementById("result").innerText = `Converted: ${converted.toFixed(2)} ${to}`; // Display result
  } else {
    document.getElementById("result").innerText = "Please enter a valid amount"; // Show error if input is invalid
  }
}
