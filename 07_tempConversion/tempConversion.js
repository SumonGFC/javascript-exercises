const convertToCelsius = function(tempF) {
    const converted = (tempF - 32)*(5/9);
    return parseFloat((converted).toFixed(1));
};

const convertToFahrenheit = function(tempC) {
    const converted = (tempC*(9/5) + 32);
    return parseFloat((converted).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
