let money = +prompt("Nhap số tiền muốn gửi tiết kiệm:");
let duration = +prompt("Thời hạn bạn muốn gửi:");
let interest = 6.8;
let moneyReceive = ((money * interest) / 100 / 12) * duration;
alert(`Số tiền bạn nhận được sau ${duration} tháng là ${moneyReceive}`);
