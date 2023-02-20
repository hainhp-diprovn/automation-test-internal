// Kiểm tra xem số cho trước có phải là số nguyên tố hay
function songuyento(n: number): void {
  var a = true;
  if (n < 2) a = false;
  else if (n == 2) a = true;
  else if (n > 2 && n % 2 == 0) a = false;
  else
    for (var i = 3; i < n - 1; i += 2)
      if (n % i == 0) a = false;
      else a = true;
  if (a == true) console.log(`${n} la so nguyen to`);
  else console.log(`${n} khong phai la so nguyen to`);
}
console.log(songuyento(4));
