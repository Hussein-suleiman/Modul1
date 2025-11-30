// Prompt  user for three integers
const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);
const num3 = parseInt(prompt("Enter the third integer:"), 10);

// Calculating sum, product, and average
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

// Printing results to HTML
document.getElementById("output").innerHTML = `
    Sum: ${sum}<br>
    Product: ${product}<br>
    Average: ${average}
`;
