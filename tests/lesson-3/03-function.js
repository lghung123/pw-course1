// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    console.log(a * b);
};

multiply(3, 5);
multiply(67, 78);

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    if (a > b) {
        if (b > c) {
            return c;
        }
        return b;
    }
    if (a < b) {
        if (c > a) {
            return c;
        }
        return a;
    }
};

console.log(findMin(3, 4, 5));
console.log(findMin(3, 1, 5));

/*3. Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.*/
function getTopStudents(students, threshold) {
    let topStudentsArr = [];
        for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudentsArr.push(students[i].name);
        }
    }
    return topStudentsArr;
};

const studentsArr = [{name: "Tokugawa", score: 7},
                    {name: "Toyotomi", score: 8.6},
                    {name: "Oda", score: 9}];

console.log(getTopStudents(studentsArr, 8.5));

/*4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.*/
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
};

console.log(calculateInterest(100_000_000, 5, 4));