import { ClientFunction, Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

//Login screen
fixture`The signin page`
    .page('http://internal-dev.dipro-tech.com/signin');
// Case 1
test('Login success', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent).eql("My Attendance");
});
// Case 2
test('Login with wrong password', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]').textContent)
        .eql("Username or password is not correct");
});
// Case 3
test('Login with password greater than 11 characters', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#nnnnnnnnn')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]').textContent)
        .eql("password must be at most 11 characters");
});
// Case 4
test('Login with password less than 6 characters', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), "DP")
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]').textContent)
        .eql("password must be at least 6 characters");
});
// Case 5
test('Login with wrong email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'wrong.email@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]').textContent)
        .eql("Username or password is not correct");
});
// Case 6
test('Login with invalid email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'invalid.dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]').textContent)
        .eql("Must be a valid email");
});
// Case 7
test('Login with all blank', async t => {
    await t
        .typeText(Selector("input").withAttribute("name", "email"), " ")
        .typeText(Selector("input").withAttribute("name", "password"), " ")
        .click(Selector("div").child("button"))
        .expect(XPathSelector('//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]').textContent)
        .eql("Must be a valid email");
});


//Fogot password screen
fixture`The forgot password page`
    .page('http://internal-dev.dipro-tech.com/forgot-password');
// Case 1
test('Forgot password with valid email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'nhanntt@dipro.vn')
        .click(Selector('form').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent)
        .eql("An email was sent to your mail box. Please check the email");
});
// Case 2
test('Forgot password with invalid email', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'invalid.dipro.vn')
        .click(Selector('form').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/form/div/div').textContent)
        .eql("Must be a valid email");
});
// Case 3
test('Forgot password with email is blank', async t => {
    await t
        .click(Selector('form').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/section/div/div/form/div/div').textContent)
        .eql("Email is required");
});
