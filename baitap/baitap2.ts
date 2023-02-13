//Bieuthucdieukien
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
xeploai()

function giai_pt_bac_nhat(a: number, b: number) {
    if (a == 0 && b == 0) {
        console.log('Phương trình vô số nghiệm');
    } else if (a != 0 && b == 0) {
        console.log('Phương trình có nghiệm x = 0');
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    } else {
        console.log('Phương trình có nghiệm x = ' + (-b / a));
    }
}
giai_pt_bac_nhat(2,2);
//Vonglap
function timsochan() {
    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i + ' - ');
        }
    }
}

function tinhSum() {
    var n=10;
    var S = 0
    var i = 1
    console.log("\nNhập vào số n: ");

    for (i = 1; i <= n; i++) {
        S = S + i;
    }
    console.log(S);
}
tinhSum()
