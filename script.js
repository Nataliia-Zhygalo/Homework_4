
firstNumber = parseInt(prompt("Type in your first number?"));
secondNumber = parseInt(prompt("Type in your second  number?"));
thirdNumber = parseInt(prompt("Type in your third  number?"));
console.log(firstNumber,secondNumber,thirdNumber);
average = Math.round((firstNumber + secondNumber + thirdNumber) / 3);
alert(`The average of ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${average}`);
