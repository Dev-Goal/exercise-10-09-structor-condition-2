var btnChangeMeter = document.getElementById("btnChangeMeter");
btnChangeMeter.addEventListener("click", getChangeMeter);
function getChangeMeter() {
  let numberMeter = parseInt(document.getElementById("meter").value);
  let numberFeet = numberMeter * 3.2808;

  document.getElementById("result").innerHTML =
    "Result: " + numberMeter + "m = " + numberFeet + "ft";
}
