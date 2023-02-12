// Bai tap co su dung bien
// 1.

const text = 'Tôi năm nay 18 tuổi\nTôi có hoài bão để theo đuổi';

console.log(text);

// 2.

const n1 = 1, n2 = 2, st = -1;

console.log(n1, n2, st);


// 3.

const sn1 = 10, sn2 = 11, sn3 = 12;

if (sn1 % 2 == 0) console.log(sn1);
if (sn2 % 2 == 0) console.log(sn2);
if (sn3 % 2 == 0) console.log(sn3);

// Bai tap co su dung if
// 1.

const toan = 9, ly = 6.5, hoa = 5;
const average = (toan + ly + hoa) / 3;

if (average >= 8) {
    console.log("xếp loại GIỎI");
} else if (average >= 6.5) {
    console.log("xếp loại KHÁ");
} else if (average >= 5) {
    console.log("xếp loại TRUNG BÌNH");
} else if (average >= 3.5) {
    console.log("xếp loại YẾU");
}  else {
    console.log("xếp loại KÉM");
}

// 2.
const a = 10, b = 11;

if (a == 0 && b == 0) console.log("Phuong trinh co vo so nghiem");
if (a == 0 && b != 0) console.log("Phuong trinh vo nghiem");
if (a != 0 && b != 0) console.log(`Phuong trinh co nghiem la ${-b / a}`);

// Bai tap co su dung vong lap
// 1.

const sn = 10;

for (let num = 1; num <= sn; num++) { 
    if (num % 2 == 0) console.log(num);
}

// 2.

const n = 20;
let sum = 0;

for (let num = 1; num <= n; num++) { 
    sum += num;
}

console.log(sum);

