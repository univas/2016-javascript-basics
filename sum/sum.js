
(function showResult() {
    var numbers = getNumbers();
    if(numbers.length < 2) {
        console.log("Please inform at least two valid numbers!");
    }
    else {
        console.log("Total: " + sum(numbers));
    }
})();

function getNumbers() {
    var numbers = getArguments()
                  .filter(isNumber)
                  .map(stringToNumber);
    return numbers;
}

function isNumber(value) {
   return !isNaN(value);
}

function stringToNumber(stringNumber) {
    return parseFloat(stringNumber);
}

function sum(numbers) {
    var total = 0;
    var addToTotal = function(number) {
       total = total + number; 
    };
    numbers.forEach(addToTotal);
    return total;
}

function getArguments() {
    return process.argv.slice(2);
}