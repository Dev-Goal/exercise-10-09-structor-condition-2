var btnElectric = document.getElementById("btn1");
btnElectric.addEventListener("click", getElectric);
function getElectric(){
    let numberElectric = parseFloat(document.getElementById("numberElectric").value);
    let tatolElectric = numberElectric * 3500;
    document.getElementById("result").innerHTML = "Giá tiền bạn phải trả là " +  tatolElectric + "VNĐ";
}