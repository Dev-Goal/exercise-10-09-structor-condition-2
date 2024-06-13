var btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let numberA = parseInt(document.getElementById("numberA").value);
  let numberB = parseInt(document.getElementById("numberB").value);
  let expressions =
    "Ta có phương trình:    " + numberA + "x + " + numberB + " = 0";
  document.getElementById("result").innerHTML = expressions;
  let message = "";
  if (numberA == 0) {
    if (numberB == 0) {
      message = "Phương trình vô số nghiệm";
    } else {
      message = "Phương trình vô nghiệm";
    }
  } else {
    message = "Phương trình có nghiệm x = " + -numberB / numberA;
  }

  document.getElementById("result1").innerHTML = message;
}
