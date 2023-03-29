// //Case 1: login success
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login success", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p')
//         .textContent
//     )
//     .eql("My Attendance");
// });
// //Case 2: all fields blank
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with all fields blank", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), " ")
//     .typeText(Selector("input").withAttribute("name", "password"), " ")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
//       ).textContent
//     )
//     .eql("Must be a valid email");
// });
// //Case 3: invalid email
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with invalid email and valid password", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), "linh@dipro.vn")
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]'
//       ).textContent
//     )
//     .eql("Username or password is not correct");
// });

// //Case 4: invalid password
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with invalid password and valid email", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro55")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]'
//       ).textContent
//     )
//     .eql("Username or password is not correct");
// });

// //Case 5: invalid password and invalid email
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with invalid password and invalid email", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), "linh@dipro.vn")
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro55")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
//       ).textContent
//     )
//     .eql("Username or password is not correct");
// });

// //Case 6: blank email field
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with blank email field", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), " ")
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
//       ).textContent
//     )
//     .eql("Email is required");
// });

// //Case 7: blank password field
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// test("Login fail with blank email field", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), " ")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]'
//       ).textContent
//     )
//     .eql("password must be at least 6 characters");
// });
