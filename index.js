for (var i = 0; i < 5; i++) {
    console.log("Happy new year");
}

//Kiemtrachanle
function check_odd_even(n) {
    let flag = 1;
    if (n % 2 == 0) flag = 0;
    return flag;
}
let n = 3;
let check = check_odd_even(n);
if (check == 0) console.log(n + " la so chan");
else console.log(n + " la so le");

