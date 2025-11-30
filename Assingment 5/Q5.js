const year = parseInt(prompt("Enter a year:"), 10);

let message;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    message = `${year} is a leap year.`;
} else {
    message = `${year} is not a leap year.`;
}

document.getElementById("result").textContent = message;
