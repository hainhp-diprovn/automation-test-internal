// Bài 8: Viết hàm trả về giá trị nhỏ nhất của hai số

function min(a: number, b: number): number {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(10, 5)); 
console.log(min(20, 100)); 

function timgiatrinhonhat(a: number, b: number): number {
    return a < b ? a : b;
    }
    const m = timgiatrinhonhat(1,10);
    console.log(m);

// Bài 9: Giải phương trình bậc nhất bằng hàm: ax + b = 0

// 9a. 
function nghiem(a: number, b:number) {
    if (a == 0){
        console.log("Phương trình vô nghiệm");
    }
    else if (b == 0){
        console.log("Phương trình vô số nghiệm");
    }
    else{
        const x = -b / a;
        console.log(`Nghiệm của phương trình ax + b = 0 là x = ${x}`);
    }
}

nghiem(2,1);

// 9b.
function giaiPtBac1(a: number, b: number): string {
    if (a == 0) {
        if (b == 0) {
            return "vo so nghiem";
        } else {
            return "vo nghiem";
        }
    } else {
        return `1 nghiem ${-b / a}`;
    }
}

const rs = giaiPtBac1(1, 2);
console.log(rs);


// Bai 10: Viết một hàm tìm ước số chung lớn nhất của 2 số
// Input: a: number, b:number
// Output: x:number


function USCLN(a: number, b: number): number {

  if (!b) {
    return a;
  }

  return USCLN(b, a % b);
}

console.log(USCLN(24, 36));
console.log(USCLN(25, 5));


// Bai 11: Viết hàm kiểm tra một số có phải số nguyên tố hay không. Nếu là số nguyên tố thì trả về true, ngược lại là false

function isPrime(num: number) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));

// Bài 12: Viết hàm giải phương trình bậc 2

function nghiem(a: number , b: number, c: number) {
  let delta = b * b - 4 * a * c;
  let x1, x2;

  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
  } else if (delta === 0) {
    x1 = -b / (2 * a);
    return [x1];
  } else {
    return ["phương trình vô nghiệm"];
  }
}

console.log(nghiem(1, -2, -3));
console.log(nghiem(1, 2, 1));
console.log(nghiem(1, 1, 1));

