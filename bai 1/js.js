let a = [];
let b = [];

function addNum() {
    let number = +document.getElementById('num').value;
    if (a.length <= 50) {
        a.push(number);
    } else {
        alert("Khong the nhap them")
    }
}

function checkNum(n) {
    let check = true;
    if (n < 2) {
        check = false;
    } else if (n <= 3) {
        check = true;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}

for (let i = 0; i < a.length; i++) {
    if (checkNum(a[i])) {
        b.push(a[i])
    }
}

console.log(a);
console.log(b);