// 1. Viết hàm trả về giá trị nhỏ nhất của hai số

function checkMin(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

checkMin(10, 11);


// 2. Viết hàm kiểm tra một số có phải số nguyên tố hay không. Nếu là số nguyên tố thì trả về true, ngược lại là false

function checkPrimeNumber(n) {
  let isPrimeNumber = true;

  if (n < 2){
    isPrimeNumber = false;
  }
  else{
      for (var i = 2; i < n - 1; i++)
      {
          if (n % i == 0){
            isPrimeNumber = false;
            break;
          }
      }
  }

  if (isPrimeNumber){
    console.log(`${n} is prime number.`);
  }
  else{
    console.log(`${n} is not prime number.`);
  }

  return isPrimeNumber;
}

checkPrimeNumber(11);

// 3. Viết hàm giải phương trình bậc 2
function phuongTrinhBac2 (a, b, c) {
  var denta = b * b - 4 * a * c;
  if (denta < 0) {
    return "Phuong trinh vo nghiem";
  }
  if (denta == 0) {
    return `Phuong trinh co nghiem kep la ${-b / (2 * a)}`;
  } else {
    return `Phuong trinh co 2 nghiem la  ${
      (-b + Math.sqrt(denta)) / (2 * a)
    } va ${(-b - Math.sqrt(denta)) / (2 * a)}`;
  }
}

const x = phuongTrinhBac2(5, 1, -6);
console.log(x);



// 4. Viết 1 hàm tìm USCLN của 2 số

function findGCD(a, b) {
  let gcd = 1;
  const minNumber = checkMin(a, b);

  for (i = 1; i <= minNumber; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
  }

  return gcd;
}

findGCD(5, 10);
