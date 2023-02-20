/*//Bieuthucdieukien
function xeploai() {
    const toan = 7, ly = 8, hoa = 9;
    const diem = (toan + ly + hoa) / 3;

    if (diem >= 8) {
        console.log("Gioi");
    } else if (diem >= 6.5) {
        console.log("Kha");
    } else if (diem >= 5) {
        console.log("Trung binh");
    } else if (diem >= 3.5) {
        console.log("Yeu");
    } else {
        console.log("Kem");
    }
}
xeploai();*/

// function giai_pt_bac_nhat(a: number, b: number) {
//     if (a == 0 && b == 0) {
//         console.log('Phương trình vô số nghiệm');
//     } else if (a != 0 && b == 0) {
//         console.log('Phương trình có nghiệm x = 0');
//     } else if (a == 0 && b != 0) {
//         console.log("Phương trình vô nghiệm");
//     } else {
//         console.log('Phương trình có nghiệm x = ' + (-b / a));
//     }
// }
// giai_pt_bac_nhat(2, 2);

// //Vonglap
// function timsochan() {
//     for (var i = 0; i <= 100; i++) {
//         if (i % 2 == 0) {
//             console.log(i + ' - ');
//         }
//     }
// }

// function tinhSum() {
//     var n=10;
//     var S = 0
//     var i = 1
//     console.log("\nNhập vào số n: ");

//     for (i = 1; i <= n; i++) {
//         S = S + i;
//     }
//     console.log(S);
// }
// tinhSum()

// Ham
// function timMin(a: number, b: number): number {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }
// const m = timMin(11,15);
// console.log(m); 

function soNguyenTo(n) {
    var soUoc = 1;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            soUoc = soUoc + 1;
        }
    }
    if (soUoc == 2) {
        return true;
    } else {
        return false;
    }
}
var x = 1;
var y = 2;
var z = 4;
if (soNguyenTo(x)) {
    console.log(x + ' là số nguyên tố');
} else {
    console.log(x + ' không phải số nguyên tố');
}
if (soNguyenTo(y)) {
    console.log(y + ' là số nguyên tố');
} else {
    console.log(y + ' không phải số nguyên tố');
}
if (soNguyenTo(z)) {
    console.log(z + ' là số nguyên tố');
} else {
    console.log(z + ' không phải số nguyên tố');
}

//Tim UCLN
function UCLN(a: number, b: number): number {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
UCLN(4, 6);

//Giai phuong trinh bac hai

var a = prompt('Nhap a:');

var b = prompt('Nhap b:');

var c = prompt('Nhap c:');

delta = b * b - (4 * a * c);

if (delta > 0) {
    console.log('Phương trình có 2 nghiệm phân biệt: x1 = ' + ((-b - Math.sqrt(delta)) / (2 * a)) + 'và x2 =' +
        ((-b + Math.sqrt(delta)) / (2 * a)));
} else if (delta == 0) {
    console.log('Phương trình có một nghiệm kép là x1 = x2 = ' + (-b) / (2 * a));
} else {
    console.log('Phương trình vô nghiệm');
}



