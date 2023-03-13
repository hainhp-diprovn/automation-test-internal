console.log("Bai 1");
//in dòng bên dưới
console.log("Tôi năm nay 18 tuổi \nTôi có hoài bão để theo đuổi");

console.log("Bai 2");
//Viết chương trình khai báo 2 biến số nguyên và 1 biến số thực sau đó in kết quả ra màn hình
const hi = 1;
const he = 2;
const ho = -3;
console.log(hi);
console.log(he);
console.log(ho);

console.log("Bai 3");

//Viết chương trình khai báo 3 biến số nguyên bất kì và in ra màn hình các số chia hết cho 2
const n = 10;
const m = 11;
const l = 12;

if (n % 2 == 0) {
  console.log(n);
}
if (m % 2 == 0) {
  console.log();
}
if (l % 2 == 0) {
  console.log(l);
}

console.log("Bai 1 - bieu thuc dieu kien");
const diemso = 3;

if (diemso >= 8) {
  console.log("Gioi");
} else if (diemso > 6.5) {
  console.log("Kha");
} else if (diemso >= 5) {
  console.log("Trung binh");
} else if (diemso > 3.5) {
  console.log("Yeu");
} else {
  console.log("Kem");
}
console.log("Bai 2 - bieu thuc dieu kien");

//Viết chương trình giải phương trình ax + b = 0

var a = 2;
var b = 4;
var x = -b / a;

console.log(x);

console.log("Bai 1 - Vong lap");
//Cho số nguyên n bất kỳ. Viết chương trình in các số chẵn từ 1 đến n

var nBatKy = 10;
for (var nguyen = 1; nguyen <= nBatKy; nguyen++) {
  if (nguyen % 2 == 0) {
    console.log(nguyen);
  }
}

console.log("Bai 2 - Vong lap");
//Cho số nguyên n. Tính giá trị biểu thức S=1+2+3+...+n
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;

var nBatKy2 = 10;
var tong = 0;
for (var s = 1; s <= nBatKy2; s++) {
  tong = tong + s;
}
console.log(tong);
