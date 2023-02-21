//Bài 1: Viết hàm tìm số nhỏ nhất trong 2 số 
function min(x, y){
  if (x < y) {
    console.log(x);
  } else if (x > y) {
    console.log(y);
  } else {
    console.log(x);
  }
}
min(1, 2);

//Cách khác:
function tim_gia_tri_nho_nhat(a, b) {
  if (a > b) {
    return b;
  }
  return a;
  //return a < b? a:b;
}
const m = tim_gia_tri_nho_nhat(5, 8);
console.log(m);

//Bài 2: Viết hàm kiểm tra một số có phải số nguyên tố hay không. Nếu là số nguyên tố thì trả về true, ngược lại là false
function check_prime(m) {
  if (m == 1) {
    return false;
  } else {
    for (var x = 2; x < m; x++) {
      if (m % x === 0) {
        return false;
      }
    }
    return true;
  }
}
const n = check_prime(17);
console.log(n);

//Bài 3: Viết 1 hàm tìm ước số chung của 2 số 
function tim_uoc_chung_lon_nhat(p,q) {
    for (var i = 1; i <= p && i <= q; i++) {
        if (p % i == 0 && q % i == 0) {
          console.log (i); 
        } 
    }
}
tim_uoc_chung_lon_nhat(6,8);

//Bài 4: giải phương trình bậc 2
function giai_phuong_trinh_bac2(a,b,c){
  if (a==0){
     }else {
         let delta= Math.pow(b,2)-4*a*c;//Math.pow(cơ số,cơ mũ)
         if(delta ==0){
             const x= -b/(2*a);
             console.log(`phuong trinh co nghiem kep la ${x}`);
         }else if(delta<0){
             console.log(`phuong trinh vo nghiem`);
         }else{
             const x1=(-b+Math.sqrt(delta))/(2*a);//Math.sqrt(x)) là căn bậc 2 của x
             const x2=(-b+Math.sqrt(delta))/(2*a);
             console.log(`phuong trinh co hai nghiem la ${x1} và ${x2}`);
     }  
  }
  }
  giai_phuong_trinh_bac2(30,12,24);