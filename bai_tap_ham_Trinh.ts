// function vietGiaTriNhoNhatCua2So(n: number, m: number): number {
//   if (n <= m) return n;
//   else return m;
//   //   console.log(m);
// }
// const mom = vietGiaTriNhoNhatCua2So(1, 2);
// console.log(mom);

// const n1 = 1,
//   m2 = 2;
// if (n1 <= m2) console.log(n1);
// else console.log(m2);

//return a<b?a:b;

//Viết hàm giải phương trình ax + b = 0
//input a,b:number
//ouput x:string
function giaiPhuongTrinh(a: number, b: number): void {
  if (a == 0 && b == 0) {
    console.log("phuong trinh vo so nghiem");
  }
  if (a != 0 && b != 0) {
    console.log(`phuong trinh co x bang ${-b / a}`);
  }
  if ((a = 0 && b != 0)) {
    console.log("phuong trinh vo nghiem");
  }
}
var a = 0;
var b = 1;
const hello = giaiPhuongTrinh(a, b);

function giaiPT1(c: number, d: number): string {
  if (c == 0) {
    if (d == 0) {
      return "vo so nghiem";
    } else {
      return "vo nghiem";
    }
  } else {
    return `1 nghiem ${-d / c}`;
  }
}

//Tìm 1 hàm tìm ước số chung lớn nhất của 2 số, cả 2 số đều chia hết cho n, n lớn nhất, dùng vòng lặp
function uCLN2S(e: number, f: number): string | void {
  if (e == 0) {
    if (f == 0) {
      return "USC bang 0";
    } else {
      return;
    }
  }
}

//giải phương trình bậc 2: ax^2+bx+c=0

//Viết hàm trả về giá trị nhỏ nhất của hai số
//input: 2 number
//output:number

function gTNN2S(a: number, b: number): number {
  let result: number;
  if (a < b) {
    result = a;
    //console.log("gia tri nho nhat la ", a);
  } else if (a == b) {
    result = a;
    //console.log("hai so co gia tri bang nhau");
  } else {
    //console.log("gia tri lon nhat la ", b);
    result = b;
  }
  return result;
}
var a = 4;
var b = 2;
var result = gTNN2S(a, b);
console.log("ket qua la", result);

//Viết hàm kiểm tra một số có phải số nguyên tố hay không. Nếu là số nguyên tố thì trả về true, ngược lại là false

function tim_so_nguyen_to(c: number): boolean {
  let dem = 0;
  for (var i = 1; i <= c; i++) {
    if (c % i == 0) {
      dem++;
    }
  }
  return dem == 2;
}
var c = 12;
var result2 = tim_so_nguyen_to(c);
console.log("ket qua la:", result2);
