// tìm số nhỏ hơn trong 2 số
function min(a: number, b: number): number {
  if (a <= b) return a;
  else return b;
}
const m = min(4, 4);
console.log(m);
