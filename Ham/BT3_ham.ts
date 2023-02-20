function nghiem(a: number, b: number): void {
  if (a == 0 && b == 0) console.log("Phuong trinh co vo so nghiem");
  if (a == 0 && b != 0) console.log("Phuong trinh vo nghiem");
  if (a != 0 && b != 0) console.log(`Phuong trinh co nghiem la ${-b / a}`);
}
const n = nghiem(4, -4);
// thay giai
//function gptb1(1, 2);
