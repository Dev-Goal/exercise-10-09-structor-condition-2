var btnArea = document.getElementById("btnArea");
btnArea.addEventListener("click", getArea);
var btnCV = document.getElementById("btnCV");
btnCV.addEventListener("click", getCV);

function getArea() {
  let widthA = parseInt(document.getElementById("widthA").value);
  let heightB = parseInt(document.getElementById("heightB").value);
  let Area = widthA * heightB;
  document.getElementById("result").innerHTML =
    "Diện tích hình chữ nhật là " + Area;
}

function getCV() {
  let widthA = parseInt(document.getElementById("widthA").value);
  let heightB = parseInt(document.getElementById("heightB").value);
  let CV = (widthA + heightB) * 2;
  document.getElementById("result").innerHTML = "Chu vi hình chữ nhật là " + CV;
}
