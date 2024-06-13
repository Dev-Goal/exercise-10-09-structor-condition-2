var btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck(){
    let numberA = parseInt(document.getElementById("numberA").value);
    let numberB = parseInt(document.getElementById("numberB").value);
    let numberC = parseInt(document.getElementById("numberC").value);
    
    if (numberA > 0 && numberB>0 && numberC>0){
        if((numberA + numberB > numberC) || (numberA + numberC > numberB) || (numberB + numberC > numberA)){
            document.getElementById("result").innerHTML = "Đây là 3 cạnh của 1 tam giác";
        }else{
            document.getElementById("result").innerHTML = "Đây không phải là 3 cạnh của 1 tam giác";
        }
    }else{
        document.getElementById("result").innerHTML = "Nhập độ dài là số nguyên dương";
    }
}