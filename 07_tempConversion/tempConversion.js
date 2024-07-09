const convertToCelsius = function(temperature) {
  let preRoundedTemperature = ( temperature - 32 ) * 5/9;
  let roundedTemperature = Math.floor((preRoundedTemperature + .05) * 10) / 10;
  return roundedTemperature;
};

const convertToFahrenheit = function(temperature) {
  let preRoundedTemperature = temperature * 9/5 + 32
  let roundedTemperature = Math.floor((preRoundedTemperature + .05)* 10) / 10;
  return roundedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
