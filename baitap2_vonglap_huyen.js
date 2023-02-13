//BAI TAP BIEU THUC
//bai tap 1 If
const toan = 8,
    ly = 9,
    hoa = 6;
const tb = (toan + ly + hoa) / 3;
if (tb >= 8 ) {
    console.log("Gioi");
} else if (tb >= 6.5) {
 console.log("Kha");
} else if (tb >= 5) {
    console.log("Trung binh");
}else if (ib >=3.5) {console.log("Yeu");
} else{console.log("Kem")}
    

//bai tap 2 giai phuong trinh
const a = 2,
      b = 5;
if (a == 0 && b == 0) console.log("PT co vo so nghiem");
if (a == 0 && b != 0) console.log("PT vo nghiem");
if (a != 0 && b != 0) console.log("PT co nghiem la ${-b / a}");



//BAI TAP VONG LAP
//Bai tap 1: 
const n = 10
for (i = 1; i <=n ; i++){
    if (i % 2 == 0) console.log(i)
}

//Bai tap 2:
const sn = 30
      sum = 0
for (i =0 ; i < n ; i++) {
    sum = i + sum 
}
console.log({sum})
