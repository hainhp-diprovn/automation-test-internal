//Bài tập về biến 1
const Yen = "Tôi năm nay 18 tuổi, Tôi có hoài bão để theo đuổi";
console.log (Yen);

//Bài tập về biến 2
 var a=1, b=2;
 var c=7/3;
 console.log (a,b);
 console.log(c);

//Bài tập về biến 3
 const num1 = 3, num2 = 6, num3 = 20;
    if (num1 % 2 == 0) console.log (num1);
    if (num2 % 2 == 0) console.log (num2);
    if (num3 % 2 == 0) console.log (num3);

//Biểu thức điều kiện: Viết chương trình giải phương trình    ax + b = 0
var a = 2, b = 3;
    if (a == 0 && b == 0){
            console.log('Phương trình vô số nghiệm');
        }
    else if (a != 0 && b == 0){
            console.log('Phương trình có nghiệm x = 0');
        }
    else if (a == 0 && b != 0){
            console.log("Phương trình vô nghiệm");
        }
    else {
            console.log('Phương trình có nghiệm x = ', (-b/a));
        }
//Cho số nguyên n bất kỳ. Viết chương trình in các số chẵn từ 1 đến n
var n = 4;
for (var i = 1; i <= n; i++){
    if (i % 2 == 0) console.log (i);
}

//Cho số nguyên n. Tính giá trị biểu thức S=1+2+3+...+n
var n = 4;
var sum = 0;
for (var i = 1; i <= n; i++){
    sum =  sum + i;
} 
console.log(sum); 


