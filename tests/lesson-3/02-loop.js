// 1. Tính tổng từ 1 đến 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
};

console.log(`Tổng từ 1 đến 100 là ${sum}.`);

// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    };
    console.log(`------------------------`);
};

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let evenArr = [];

for (let i = 1; i <= 99; i++) {
    if (i %  2 == 1) {
        evenArr.push(i);
    };
};

console.log(evenArr);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com, ..., user10@example.com).*/
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}*/
const doanhThu = [{"month": 1, "total": 123}, {"month": 2, "total": 100}, {"month": 3, "total": 454},
                {"month": 4, "total": 755}, {"month": 5, "total": 340}, {"month": 6, "total": 230},
                {"month": 7, "total": 435}, {"month": 8, "total": 532}, {"month": 9, "total": 454},
                {"month": 10, "total": 545}, {"month": 11, "total": 685}, {"month": 12, "total": 432}];

let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
};

console.log(`Tổng doanh thu là ${tongDoanhThu}.`);