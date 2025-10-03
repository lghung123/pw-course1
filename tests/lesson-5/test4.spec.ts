import { test } from '@playwright/test';

let inputData = [
{
    title: 'Robot đầu tiên thu thập dữ liệu trong mắt bão',
    content: 'MỸRobot C-Star cao 1,2 m của NOAA vượt qua thành mắt bão Humberto, truyền dữ liệu thời tiết theo thời gian thực để dự báo và nghiên cứu.'
},
{
    title: 'AirPods Pro 3 đoạt giải tai nghe True Wireless được yêu thích nhất',
    content: 'Mẫu tai nghe của Apple vượt sáu đối thủ để chiến thắng ở số bình chọn thứ 5 của Sản phẩm tôi yêu 2025.'
},
{
    title: 'LG ra máy giặt sấy có khả năng giảm vi nhựa',
    content: 'LG cho biết bộ sản phẩm 2026 AI DD 2.0 có khả năng giảm thiểu vi nhựa và sẽ thay thế toàn bộ dải sản phẩm hiện có bao gồm lồng ngang, lồng đứng, giặt sấy.'
},
{
    title: 'Tablet AI hỗ trợ người dùng làm việc linh hoạt',
    content: 'Galaxy Tab S11 series tích hợp Galaxy AI hỗ trợ tóm tắt, dịch thuật, thiết kế mỏng nhẹ, hướng đến nhu cầu làm việc di động, giúp người dùng xử lý đa nhiệm ở bất kỳ đâu.'
},
{
    title: 'Hollywood sốc vì AI',
    content: 'Giới làm phim Mỹ phẫn nộ trước tin diễn viên AI đang có cơ hội đóng phim ở Hollywood, cho rằng điều này bất công với nghệ sĩ thực thụ.'
},
{
    title: 'Giải pháp dùng blockchain trong thanh toán xuyên biên giới',
    content: 'Chi phí cao và tốc độ chậm của giao dịch thanh toán quốc tế khiến một số chuyên gia coi blockchain như một giải pháp bổ sung cho hệ thống tài chính.'
},
{
    title: 'Ấn Độ xây siêu đập cạnh tranh với Trung Quốc',
    content: 'Nhà chức trách Ấn Độ đang xúc tiến dự án xây dựng đập lớn nhất cả nước với hồ chứa dung tích 9,2 tỷ m3 và công suất 11.200-11.600 MW.'
},
{
    title: 'Sinh viên Việt có thể dùng Gemini Pro miễn phí một năm',
    content: 'Google cho biết sẽ tặng một năm sử dụng Gemini Pro cho sinh viên đại học trên toàn quốc, nhằm hỗ trợ Việt Nam nâng cao chất lượng nguồn nhân lực.'
},
{
    title: 'Strava kiện Garmin',
    content: 'Strava kiện đối tác lâu năm Garmin với cáo buộc vi phạm bằng sáng chế và cho rằng "chỉ bồi thường tiền là không đủ".'
},
{
    title: 'Xây dựng bộ dữ liệu AI tiếng Việt cho cộng đồng tự do sử dụng',
    content: 'HÀ NỘIĐại diện dự án ViGen cho biết sẽ xây dựng bộ dữ liệu tiếng Việt để cộng đồng tự do sử dụng, kể cả với mục đích thương mại, nhằm thúc đẩy ứng dụng AI tại Việt Nam.'
},
{
    title: '86% doanh nghiệp lớn tại Việt Nam ứng dụng AI vào an ninh mạng',
    content: 'Khảo sát của hãng nghiên cứu thị trường IDC và công ty an ninh mạng Fortinet (Mỹ) cho thấy hơn 8/10 doanh nghiệp lớn tại Việt Nam đã chủ động dùng AI để bảo vệ hệ thống.'
},
{
    title: "Nhà đồng sáng lập xuất hiện không 'cứu' nổi giá Pi Network",
    content: 'Chengdiao Fan, người đồng sáng lập Pi Network, lần đầu xuất hiện để nói về dự án nhưng giá Pi chỉ tăng nhẹ, không tạo đột phá như cộng đồng mong đợi.'
}];

test('Add Input data', async ({page}) => {
    await test.step('Navigate to Personal Notes page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 4: Personal notes']");
    });

    await test.step('Add Personal Notes', async () => {
        for (let i = 0; i < inputData.length; i++) {
            await page.locator("//input[@id='note-title']").fill(inputData[i].title);
            await page.locator("//textarea[@id='note-content']").fill(inputData[i].content);
            await page.click("//button[@id='add-note']");
        };
    });

    await test.step('Search notes', async () => {
        await page.locator("//input[@id='search']").fill(inputData[5].title)
    });
});