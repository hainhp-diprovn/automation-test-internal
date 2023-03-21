// //Case 1: Redirect to forget pw page
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The forget password page`.page(
//   "http://internal-dev.dipro-tech.com/signin"
// );

// test("redirect to forget pw page", async (t) => {
//   await t
//     .click(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[3]/span/a'
//       )
//     )
//     .expect(XPathSelector('//*[@id="__next"]/section/div/div/h2').textContent)
//     .eql("Forgot password");
// });
////Case 2: valid email
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The forget password page`.page(
//   "http://internal-dev.dipro-tech.com/forgot-password"
// );

// test("valid email", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .click(Selector("button").withAttribute("tabindex", "0"))
//     .expect(
//       XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent
//     )
//     .eql("An email was sent to your mail box. Please check the email");
// });

// //Case 3: invalid email
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`Reset pw fail with invalid email`.page(
//   "http://internal-dev.dipro-tech.com/forgot-password"
// );

// test("valid email", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), "@dipro.vn")
//     .click(Selector("button").withAttribute("tabindex", "0"))
//     .expect(
//       XPathSelector('//*[@id="__next"]/section/div/div/form/div/div')
//         .textContent
//     )
//     .eql("Must be a valid email");
// });

// //Case 4: blank email filed
// import { ClientFunction, Selector } from "testcafe";
// import XPathSelector from "./xpath-selector";

// fixture`The forget password page`.page(
//   "http://internal-dev.dipro-tech.com/forgot-password"
// );

// test("reset pw fail if blank email ", async (t) => {
//   await t
//     .click(Selector("button").withAttribute("tabindex", "0"))
//     .expect(
//       XPathSelector('//*[@id="__next"]/section/div/div/form/div/div')
//         .textContent
//     )
//     .eql("Email is required");
// });
