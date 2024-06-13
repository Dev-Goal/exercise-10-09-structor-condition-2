var btnChangeTemperatureC = document.getElementById("btnChangeC");
btnChangeTemperatureC.addEventListener("click", getChangeTemperatureC);
function getChangeTemperatureC() {
  let temperatureC = parseInt(document.getElementById("temperatureC").value);
  let temperatureF = (9 * temperatureC) / 5 + 32;
  document.getElementById("resultC").innerHTML =
    temperatureC + " độ C " + "  ===>  " + temperatureF + " độ F";
}

var btnChangeTemperatureF = document.getElementById("btnChangeF");
btnChangeTemperatureF.addEventListener("click", getChangeTemperatureF);
function getChangeTemperatureF() {
  let temperatureF = parseInt(document.getElementById("temperatureF").value);
  let temperatureC = ((temperatureF - 32) / 9) * 5;
  document.getElementById("resultF").innerHTML =
    temperatureF + " độ F " + "  ===>  " + temperatureC + " độ C";
}
