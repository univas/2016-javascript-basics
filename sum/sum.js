
console.log("Total: " + sum(getNumbers()));

function getNumbers() {
    var numbers = [];
    for (var i = 2; i < process.argv.length; i++) {
        var stringNumber = process.argv[i];
        var number = parseFloat(stringNumber);
        if(!isNaN(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}

function sum(numbers) {
    var total = 0;
    numbers.forEach(function addToTotal(number) {
       total = total + number; 
    });
    return total;
}