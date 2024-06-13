var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let numberAge = parseInt(document.getElementById("age1").value);
  let message = "";
  if (numberAge > 0 && numberAge <= 120) {
    message = "Bạn là con người";
  } else {
    message = "Who are you?";
  }
  document.getElementById("result").innerHTML = message;
}
