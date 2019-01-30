// Create a constructor function Calculator that creates objects with 3
// methods:
// read() asks for two values using prompt and remembers them in
// object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function reload() {
    location.reload();
}

function Calculator() {
    this.read = function() {
        this.value1 = prompt("Please enter the first value", "");
        this.value2 = prompt("Please enter the second value", "");
    };
    this.sum = function() {
        return parseInt(this.value1) + parseInt(this.value2);
    };
    this.mul = function() {
        return parseInt(this.value1) * parseInt(this.value2);
    };
}

const calculator = new Calculator();
calculator.read();

alert(`The sum of the values is ${calculator.sum()}`);
alert(`The product of the values is ${calculator.mul()}`);



