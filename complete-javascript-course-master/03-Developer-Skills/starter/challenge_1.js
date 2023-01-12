function printForecast(array) {
  let forecast = "... ";
  let oneDayForecast = "";
  for (let i = 0; i < array.length; i++) {
    oneDayForecast = `${array[i]} degrees Celsius in ${i + 1} days ... `;
    forecast += oneDayForecast;
    oneDayForecast = "";
  }
  return forecast;
}

const temps = [17, 21, 23];
console.log(printForecast(temps));
