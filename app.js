//temperature conversion functions
// rounds to 1 decimal place
function celsiusToFahrenheit(number) {
  const conversion = (number * 1.8) + 32;
  return Number.isInteger(conversion) ? conversion : Number(conversion.toFixed(1));
}

function fahrenheitToCelsius(number) {
  const conversion = (number - 32) * (5 / 9);
  return Number.isInteger(conversion) ? conversion : Number(conversion.toFixed(1));
}

//fahrenheit input
document.getElementById('fahrenheit').addEventListener('keyup', function(e) {
  const input = e.target.value;
  let output = document.getElementById('celsius');
  if (input === '') {
    output.value = '';
  } else {
    output.value = fahrenheitToCelsius(input);
  }
})

//celsius input
document.getElementById('celsius').addEventListener('keyup', function(e) {
  const input = e.target.value;
  let output = document.getElementById('fahrenheit');
  if (input === '') {
    output.value = '';
  } else {
    output.value = celsiusToFahrenheit(input);
  }
})