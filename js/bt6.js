var btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let numberA = parseInt(document.getElementById("numberA").value);
  let numberB = parseInt(document.getElementById("numberB").value);
  let numberC = parseInt(document.getElementById("numberC").value);
  let expressions =
    "Ta có phương trình: " + numberA + "x^2 + " + numberB + "x + " + numberC + " = 0";
  let message = "";
  if (numberA == 0) {
    if (numberB == 0) {
      if (numberC == 0) {
        message = "Phương trình vô số nghiệm";
      } else {
        message = "Phương trình vô nghiệm";
      }
    } else {
      message = "Phương trình có 1 nghiệm x = " + -numberC / numberB;
    }
  } else {
    let denTa = numberB * numberB - 4 * numberA * numberC;
    if (denTa > 0) {
      let x1 = (-numberB + Math.sqrt(denTa)) / (2 * numberA);
      let x2 = (-numberB - Math.sqrt(denTa)) / (2 * numberA);
      message = "Phương trình có 2 ngiệm là x1 = " + x1 + " và x2= " + x2;
    } else if (denTa == 0) {
      message =
        "Phương trình có 1 nghiệm x1 = x2 = " + (-numberB / 2) * numberA;
    } else {
      message = "Phương trình vô nghiệm";
    }
  }
  document.getElementById("result").innerHTML = expressions;
  document.getElementById("result1").innerHTML = message;
}
