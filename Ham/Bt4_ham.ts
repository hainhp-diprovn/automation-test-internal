// Giải phương trình bậc 2
function ptbac2(a: number, b: number, c: number): string {
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

const x = ptbac2(1, -4, 4);
console.log(x);
