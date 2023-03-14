import { ClientFunction, Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

fixture`The signin page`
    .page('http://internal-dev.dipro-tech.com/signin');
//Case 1 Valid email and password
test('Login success', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("My Attendance");
});

//Case 2 Invalid email
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'nguyenphuong@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("Username or password is not correct");
});
//Case 3 Invalid passwword
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro5555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("Username or password is not correct");
});
//Case 4 Blank email field
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), '')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro5555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("Please fill in this field.");
});
//Case 5 Blank password field
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), '')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("Please fill in this field.");
});
//Case 6 Blank email and password field
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), '')
        .typeText(Selector('input').withAttribute('name', 'password'), '')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("Please fill in this field.");
});
//Case 7 Invalid format email
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@##dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql(`Must be a valid email`);
});
//Case 8 Password under 6 characters
test('Login fail', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'nguyenphuong@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent)
        .eql("password must be at least 6 characters");
});

//Forgot passwword
fixture`Navigate to Forget password page`
    .page('http://internal-dev.dipro-tech.com/signin');
test(`Forget password page`, async (t) => {
    await t
        .click(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/form/div[3]/span/a'))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/h2').textContent)
        .eql("Forgot password");
});
//Case 1 Valid email
fixture`The forget password page`
    .page(`http://internal-dev.dipro-tech.com/forgot-password`);
test(`Valid email`, async (t) => {
    await t
        .typeText(Selector(`input`).withAttribute(`name`, `email`), `linhhta@dipro.vn`)
        .click(Selector(`button`).withAttribute(`tabindex`, `0`))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent)
        .eql("An email was sent to your mail box. Please check the email");
});
//Case 2 Invalid email
test(`Invalid email`, async (t) => {
    await t
        .typeText(Selector(`input`).withAttribute(`name`, `email`), `nguyenphuong@dipro.vn`)
        .click(Selector(`button`).withAttribute(`tabindex`, `0`))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent)
        .eql("Must be a valid email");
});
//Case 3 Blank email field
test(`Blank email field `, async (t) => {
    await t
        .click(Selector(`button`).withAttribute(`tabindex`, `0`))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/form/div/div').textContent)
        .eql("Email is required");
});

