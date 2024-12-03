class SOTIETKIEM {
    constructor(code, type, name, idNumber, date, amount) {

        this.code = code.length <= 5 ? code : code.slice(0, 5);
        this.type = type.length <= 10 ? type : type.slice(0, 10);
        this.name = name.length <= 30 ? name : name.slice(0, 30);
        this.idNumber = idNumber;
        this.date = this.checkValidDate(date) ? date : "Ngày không hợp lệ";
        this.amount = amount;
    }

    print() {
        console.log(`Mã số: ${this.code}`);
        console.log(`Loại tiết kiệm: ${this.type}`);
        console.log(`Họ tên: ${this.name}`);
        console.log(`Chứng minh nhân dân: ${this.idNumber}`);
        console.log(`Ngày mở sổ: ${this.date}`);
        console.log(`Số tiền gửi: ${this.amount}`);
    }

    checkValidDate(date) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(date);
    }
}

let list = [];

function add(sotietkiem) {
    list.push(sotietkiem);
}

add (SoTietKiem);

