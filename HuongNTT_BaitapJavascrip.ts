//Bài 1: Viết chương trình để in ra các dòng sau:
//Tôi năm nay 18 tuổi
//Tôi có hoài bão để theo đuổi
const print1 = "Tôi năm nay 18 tuổi"
console.log(print1);
const print2 = "Tôi có hoài bão để theo đuổi"
console.log(print2);

//Bài 2: Viết chương trình khai báo 2 biến số nguyên và 1 biến số thực sau đó in kết quả ra màn hình
var a2 = 2;
var b2 = 3;
var c2 = 5.5;
console.log(a2);
console.log(b2);
console.log(c2);

//Bài 3: Viết chương trình khai báo 3 biến số nguyên bất kì và in ra màn hình các số chia hết cho 2
const sn1 = 4;
const sn2 = 9;
const sn3 = 10;
if (sn1 % 2 == 0)
    console.log(sn1);
if (sn2 % 2 == 0)
    console.log(sn2);   
if (sn3 % 2 == 0)
    console.log(sn3);  

//Bài 4: Cho điểm Toán, Lý, Hóa của một học sinh. Hãy tính điểm trung bình của học sinh này và cho biết em này 
//ĐTB >= 8 : xếp loại GIỎI
//8 > ĐTB >= 6.5 : xếp loại KHÁ
//6.5 > ĐTB >= 5 : xếp loại TRUNG BÌNH
//5 > ĐTB >= 3.5 : xếp loại YẾU
//3.5 > ĐTB : xếp loại KÉM
const toan = 7,ly = 6.8, hoa = 8.5;
const dtb= (toan+ly+hoa)/3;
if (dtb >= 8) {
    console.log("Gioi");
} else if (dtb > 6.5) {
    console.log("Kha");
} else if (dtb >= 5) {
    console.log("Trung binh");
} else if (dtb > 3.5) {
    console.log("Yeu");
} else {
    console.log("Kem");
}

//Bài 5: Viết chương trình giải phương trình: ax + b = 0
var a = 5, b = 6;
    if (a == 0 && b == 0)
        console.log ("Phương trình vô số nghiệm");
    if (a != 0 && b == 0)
        console.log("Phương trình có nghiệm x = 0");
    if (a == 0 && b != 0)
        console.log("Phương trình vô nghiệm");
    if (a != 0 && b != 0)
        console.log("Phương trình có nghiệm là ${-b / a}");

//Bài 6: Cho số nguyên n bất kỳ. Viết chương trình in các số chẵn từ 1 đến n
const n6 = 10;
for (var i = 1; i <=n6 ; i++){
if (i % 2 == 0) console.log(i)
} 

// Bài 7: Cho số nguyên n. Tính giá trị biểu thức S=1+2+3+...+n
var n7 = 20, sum = 0;
for (var i = 1; i <=n7 ; i++){
    sum = sum +i
}
console.log(sum);