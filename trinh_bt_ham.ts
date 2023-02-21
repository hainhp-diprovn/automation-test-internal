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
