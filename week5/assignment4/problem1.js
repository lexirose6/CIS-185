// node assignment4/problem1.js

// Celsius to fahrenheit converter
function celsiusToFahrenheit(celsius) {
    let f = (celsius * (9/5)) + 32;
    return f;
}

// Fahrenheit to celsius converter
function fahrenheitToCelsius(fahrenheit) {
    let c = (fahrenheit - 32) * (5/9);
    return c;
}

// Output
function getTemperatureDescription(fahrenheit) {
    if (fahrenheit < 32)
        return "Freezing";
    else if (fahrenheit <= 50)
        return "Cold";
    else if (fahrenheit <= 70)
        return "Cool";
    else if (fahrenheit <= 85)
        return "Warm";
    else if (fahrenheit > 85)
        return "Hot";
}


console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(celsiusToFahrenheit(-40))

console.log(fahrenheitToCelsius(32))
console.log(fahrenheitToCelsius(68))
console.log(fahrenheitToCelsius(212))

console.log(getTemperatureDescription(25))
console.log(getTemperatureDescription(45))
console.log(getTemperatureDescription(75))
console.log(getTemperatureDescription(95))
