fixture`The signin page`
    .page('http://internal-dev.dipro-tech.com/signin');

test('Case 1: Login success', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))//Câu hỏi 1: Ở đây có thể lấy thẻ button với thuộc tính type="submit"
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("My Attendance");
    });
test('Case 2: Login fail with invalid password', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Kaori1279')
        .click(Selector('div').child('button'))
        .expect(Selector(".csscss-xsto0d").textContent)
        .eql("Username or password is not correct");
});
test('Case 3: Login fail with invalid email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linh@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(Selector(".csscss-xsto0d").textContent)
        .eql("Username or password is not correct");
});
test('Case 4 : Login fail with incorrect format email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(Selector(".text-red-700").textContent)
        .eql("Must be a valid email");
});
test('Case 5 : Login fail with password less than 6 character', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro')
        .click(Selector('div').child('button'))
        .expect(Selector(".text-red-700").textContent)// Câu hỏi 2: Nếu lấy text-red-70 thì có cần phân biệt arlert phía trên và dưới không?
        .eql("password must be at least 6 characters");
});
// test('Case 6 : Login fail if all are blank', async t => {
//     await t
//         .typeText(Selector('input').withAttribute('name', 'email'), '')
//         .typeText(Selector('input').withAttribute('name', 'password'), '')
//         .click(Selector('div').child('button'))
//         .expect(Selector(".text-red-700").textContent)
//         .eql("");
// });
//Câu hỏi 3: Case này có lúc hiển thị message hệ thống, khi hiển thị message của brower, khi không hiển thị gì-> không biết requirement ntn?
test('Case 7 : Reset password fail with incorrect format email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'huongntt')
        .click(Selector('div').withAttribute("type", "submit"))
        .expect(Selector(".text-red-700").textContent)
        .eql("Must be a valid email");
});
test('Case 8 : Reset password fail with email is blank', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), '')
        .click(Selector('div').withAttribute("type", "submit"))
        .expect(Selector(".text-red-700").textContent)
        .eql("Email is required");
});
test('Case 9 : Reset password success with valid email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .click(Selector('div').withAttribute("type", "submit"))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent)
        .eql("An email was sent to your mail box. Please check the email");
    });
//Câu hỏi 4: Nếu như có nhiều kết quả mong đợi thì sẽ viết ntn?
//Câu hỏi 5: Vì sao chạy bị lỗi? huhu
