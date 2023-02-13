/* 
Câu 1: Viết chương trình để in ra các dòng sau:
Tôi năm nay 18 tuổi
Tôi có hoài bão để theo đuổi
*/

const wish1 = "Tôi năm nay 18 tuổi";
const wish2 = "Tôi có hoài bão để theo đuổi";
console.log(wish1);
console.log(wish2);

// Câu 2: Viết chương trình khai báo 2 biến số nguyên và 1 biến số thực sau đó in kết quả ra màn hình

const a = 10;
const b = 20;
const c = 15.5;

console.log(a);
console.log(b);
console.log(c);

// Câu 3: Viết chương trình khai báo 3 biến số nguyên bất kì và in ra màn hình các số chia hết cho 2


const a = 11;
const b = 20;
const c = 15;

if (a % 2 === 0) {
  console.log(a);
}
if (b % 2 === 0) {
  console.log(b);
}
if (c % 2 === 0) {
  console.log(c);
}

/* 
Câu 4: Cho điểm Toán, Lý, Hóa của một học sinh. Hãy tính điểm trung bình của học sinh này và cho biết em này 
ĐTB >= 8 : xếp loại GIỎI
8 > ĐTB >= 6.5 : xếp loại KHÁ
6.5 > ĐTB >= 5 : xếp loại TRUNG BÌNH
5 > ĐTB >= 3.5 : xếp loại YẾU
3.5 > ĐTB : xếp loại KÉM
*/

const diem: number = 8.5;

if (diem >= 8) {
    console.log("Gioi");
} else if (diem > 6.5) {
    console.log("Kha");
} else if (diem >= 5) {
    console.log("Trung binh");
} else if (diem > 3.5) {
    console.log("Yeu");
} else {
    console.log("Kem");
}

// Câu 5: Viết chương trình giải phương trình: ax + b = 0

const a = 2;
const b = 3;

if (a === 0) {
  console.log("Phương trình có hệ số a bằng 0, không phải là phương trình bậc nhất.");
} else {
  const x = -b / a;
  console.log(`Nghiệm của phương trình ax + b = 0 là x = ${x}`);
}

// Câu 6: Cho số nguyên n bất kỳ. Viết chương trình in các số chẵn từ 1 đến n

let n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Câu 7: Cho số nguyên n. Tính giá trị biểu thức S=1+2+3+...+n

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);



