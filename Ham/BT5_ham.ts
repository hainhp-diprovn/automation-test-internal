// tìm UCLN của 2 số
function uscl(a: number, b: number): string {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a == b) {
    return `${a} la UCLN cua ${a} va ${b}`;
  } else if (a > b) {
    if (b == 0 || b == 1) {
      return `${b} la uoc so chung lon nhat cua ${a} va ${b}`;
    } else if (a % b == 0) {
      return `${b} la uoc so chung lon nhat cua ${a} va ${b}`;
    } else if (a % b != 0) {
      for (var i = b - 1; i >= 1; i--)
        if (a % i == 0 && b % i == 0) {
          return `${i} la uoc so chung lon nhat cua ${a} va ${b}`;
        } else `1 la uoc so chung lon nhat cua ${a} va ${b}`;
    }
  } else {
    if (a == 0 || a == 1) {
      return `${a} la uoc so chung lon nhat cua ${a} va ${b}`;
    } else if (b % a == 0) {
      return `${a} la uoc so chung lon nhat cua ${a} va ${b}`;
    } else
      for (var i = a - 1; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
          return `${i} la uoc so chung lon nhat cua ${a} va ${b}`;
        } else {
          return `1 la uoc so chung lon nhat cua ${a} va ${b}`;
        }
      }
  }
  return `${a}`;
}
const q = uscl(15, 9);
console.log(q);
