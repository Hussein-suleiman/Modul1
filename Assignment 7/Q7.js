const rolls = parseInt(prompt("How many dice do you want to roll?"), 10);

let sum = 0;


for (let i = 0; i < rolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // value from 1 to 6
    sum += roll;
}


document.getElementById("result").textContent = `Sum of dice rolls: ${sum}`;
