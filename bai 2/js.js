function check() {
    let a = +document.getElementById("tuSo1").value
    let b = +document.getElementById("tuSo2").value
    let c = +document.getElementById("mauSo1").value
    let d = +document.getElementById("mauSo2").value

    if (a * d == b * c) {
        document.write("Hai phan so nay bang nhau");
    } else {
        document.write("Hai phan so nay khong bang nhau");
    }
}