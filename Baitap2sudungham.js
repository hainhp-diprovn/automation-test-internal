// Bai tap su dung bien
// Viết chương trình để in ra các dòng sau:
// Tôi năm nay 18 tuổi
// Tôi có hoài bão để theo đuổi

const age = "Tôi năm nay 18 tuổi" ; 
const dream = "Tôi có hoài bão để theo đuổi" ; 
console.log(age)
console.log(dream)

// Viết chương trình khai báo 2 biến số nguyên và 1 biến số thực sau đó in kết quả ra màn hình

var a = 5;
var b = 10;
var c = 3.14;

console.log(a);
console.log(b);
console.log(c);

// Viết chương trình khai báo 3 biến số nguyên bất kì và in ra màn hình các số chia hết cho 2

var num1 = 9;
var num2 = 4;
var num3 = 11;

if (num1 % 2 === 0) {
  console.log(num1 + " là một số chia hết cho 2");
}

if (num2 % 2 === 0) {
  console.log(num2 + " là một số chia hết cho 2");
}

if (num3 % 2 === 0) {
  console.log(num3 + " là một số chia hết cho 2");
}

// giải phương trình bậc 1 tx+m= 0 

const t = 5;
const m = 10;
if (a === 0) {
    console.log("Phương trình có hệ số a bằng 0, không phải là phương trình bậc nhất.");
  } else {
    const x = -m / t;
    console.log(`Nghiệm của phương trình tx + m = 0 là x = ${x}`);
  }
// Cho điểm Toán, Lý, Hóa của một học sinh. Hãy tính điểm trung bình của học sinh này và cho biết em này 
// ĐTB >= 8 : xếp loại GIỎI
// 8 > ĐTB >= 6.5 : xếp loại KHÁ
// 6.5 > ĐTB >= 5 : xếp loại TRUNG BÌNH
// 5 > ĐTB >= 3.5 : xếp loại YẾU
// 3.5 > ĐTB : xếp loại KÉM

var DTB = 8;
if (DTB >= 8) {
  console.log("Xếp loại: GIỎI");
} else if (DTB >= 6.5) {
  console.log("Xếp loại: KHÁ");
} else if (DTB >= 5) {
  console.log("Xếp loại: TRUNG BÌNH");
} else if (DTB >= 3.5) {
  console.log("Xếp loại: YẾU");
} else {
  console.log("Xếp loại: KÉM");
}

// Cho số nguyên n. Tính giá trị biểu thức S=1+2+3+...+n
const n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`Tổng các số từ 1 đến ${n} là: ${sum}`);

