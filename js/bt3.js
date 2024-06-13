var btnArea = document.getElementById("btnArea");
btnArea.addEventListener("click", getArea);
var btnCV = document.getElementById("btnCV");
btnCV.addEventListener("click", getCV);

function getArea() {
  let widthA = parseInt(document.getElementById("widthA").value);
  let Area = widthA ** 2;
  document.getElementById("result").innerHTML =
    "Diện tích hình vuông là " + Area;
}

function getCV() {
    let widthA = parseInt(document.getElementById("widthA").value);
    let CV = widthA * 4;
    document.getElementById("result").innerHTML =
      "Chu vi hình vuông là " + CV;
  }
