# Lesson-05
1. Function advance
2. DOM
3. Selector
4. Playwright basic syntax

## 1. Function advance
### 1.1. Function expression
- Định nghĩa function bằng cách **gán nó cho một biến**.
- Ví dụ:
```javascript
// Function Declaration (khai báo hàm)
function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function(a, b) {
    return a + b;
};

// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau
```

### 1.2. Lambda function (arrow function)
- Đây là cách viết ngắn gọn hơn cho function. Sử dụng dấu ```=>```.
- Ví dụ:
```javascript
// Function truyền thống
function add(a, b) {
    return a + b;
};

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
    return a + b;
};
```
### 1.3. Anonymous function
- Đây là function không có tên, được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.
- Ví dụ:
```javascript
// Named function (có tên)
function namedFunction() {
    console.log("I have a name!");
};

// Anonymous function (không tên)
function() { // SyntaxError! Không thể đứng một mình
    console.log("I'm anonymous!");
};

// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};
// 2. Dùng làm callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);
```
## 2. DOM
- DOM (Document Object Model) là một chuẩn được định nghĩa bởi W3C (Tổ Chức Web Toàn Cầu – World Wide Web Consortium). 
- DOM được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…

### 2.1 Cấu trúc 1 Node
- Giả sử có 1 node như sau:
```html
<option value="usa">United States</option>
```
Trong đó:
- ```<option```: Thẻ/tag mở.
- ```value```: Thuộc tính.
- ```"usa"```: Giá trị thuộc tính.
- ```United States```: Text.
- ```/option>```: Thẻ/tag đóng.

### 2.2. Các loại thẻ thường gặp
#### 2.2.1. Thẻ Cấu Trúc Cơ Bản
- ```<html>```: Thẻ gốc của trang.
- ```<head>```: Chứa metadata: tiêu đề website, hiển thị Google.
- ```<body>```: Nội dung của cả website hiển thị.
- ```<div>```: Khối/container chung.
- ```<span>```: Inline container.
- ```<header>```, ```<footer>```, ```<nav>```, ```<section>```: Thẻ ngữ nghĩa.

#### 2.2.2. Thẻ Nội Dung:
- ```<h1>``` đến ```<h6>```: Tiêu đề.
- ```<p>```: Đoạn văn.
- ```<a>```: Liên kết.
- ```<img>```: Hình ảnh.
- ```<ul>```, ```<ol>```, ```<li>```: Danh sách.

#### 2.2.3. Thẻ Form (Quan trọng cho Testing)
- ```<form>```: Biểu mẫu.
- ```<input>```: Ô nhập liệu (text, password, checkbox, radio, etc.).
- ```<button>```: Nút bấm.
- ```<select>``` và ```<option>```: Dropdown.
- ```<textarea>```: Vùng văn bản nhiều dòng.

## 3. Selector
- Trong mỗi thẻ HTML sẽ có những thuộc tính (Properties) và có phân cấp cha – con với các thẻ HTML khác. Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là **selector**.
- Có 3 loại selector thường dùng:
    - XPath: Dùng được trong hầu hết các trường hợp (99.99%). Đa dạng, có khả năng tìm các phần tử khó. Nhược điểm là hơi dài so với các loại khác. Ví dụ: ```//button[normalize-space() = 'Add to cart']```.
    - CSS selector: Ngắn gọn, performance cao. Dùng cho các trường hợp dễ tìm. Không linh hoạt bằng XPath. Ví Dụ: ```.add-to-cart```.
    - Playwright selector: Chỉ dùng riêng cho Playwright. Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM. Hướng tới "giống người dùng đang nhìn thấy gì". Ví Dụ: ```page.getByText("Add to cart");```.

### XPath selector
- XPath = XML Path.
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1 ```/```
    - Tương đối: tìm dựa vào đặc tính, bắt đầu bởi 2 ```//```
        - Cú pháp: ```//tenthe[@thuoctinh="gia tri"]```
- Nên dùng XPath tương đối.

## 4. Playwright basic syntax
### test: Đơn vị cơ bản để khai báo một test
```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
    // Code của test
});
```

### step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
```javascript
await test.step('Tên step', async () => {
    // Code here
});

------
test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
        // Code here
    });
});
```
- Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

### Navigate
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```

### Locate
- Sử dụng ```page.locator("<selector>")``` để chọn phần tử trên trang. Ví dụ:
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```

### Click
```javascript
// Single click
await page.locator("//button").click();

// Double click
await page.locator("//button").dblclick();

// Click chuột phải
page.locator("//button").click({
    button: 'right'
});

// Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
});
```

### Input
```javascript
// fill: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

// pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
```

### Radio/checkbox
```javascript
// Lấy giá trị hiện tại đang là check hay không:
const isChecked = page.locator("//input").isChecked();

// Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

### Select
```javascript
await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' });
```

### Upload file
```javascript
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
```

### Hover
```javascript
await page.locator("<xpath here>").hover();
```

### Hàm text()
- Hàm text() dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ với DOM sau:
```html
<div @class="playwright">This is a text</div>
```
Thì để chọn phần tử này, ta dùng cú pháp như sau: ```//div[text()='This is a text']```.

### Hàm contains()
- Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ:
```html
<div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
<div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
```
Để chọn các phần tử này, ta dùng hàm ```contains(<giá trị>, <giá trị contains>)```. Ví
dụ:
```
//div[contains(text(), 'Tôi là Alex')]
//div[contains(text(), 'Bây giờ là:')]
```

### Xử lý confirmation dialog
- Có thể sử dụng dialog handler trước khi thao tác 1 hành động trigger dialog (ví dụ click vào button) để dùng lệnh ```dialog.accept()``` (Chấp thuận) hoặc ```dialog.dismiss()``` (Cancel) trên dialog:
```javascript
page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();
```