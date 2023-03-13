import { ClientFunction, Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

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

// test("Login with invalid email", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta1@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]'
//       ).textContent
//     )
//     .eql("Username or password is not correct");
// });

// test("Login with invalid pass", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#1")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]'
//       ).textContent
//     )
//     .eql("Username or password is not correct");
// });

// test("Login with allblanks", async (t) => {
//   await t
//     .typeText(Selector("input").withAttribute("name", "email"), " ")
//     .typeText(Selector("input").withAttribute("name", "password"), " ")
//     .click(Selector("div").child("button"))
//     .expect(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]'
//       ).textContent
//     )
//     .eql("password must be at least 6 characters");
// });

test("Reset pass with invalid email", async (t) => {
  await t
    .click(
      XPathSelector(
        '//*[@id="__next"]/div/section[1]/div/div/form/div[3]/span/a'
      )
    )
    .typeText(
      Selector("input").withAttribute("name", "email"),
      "linhht22@dipro.vn"
    )
    .click(Selector("button").withAttribute("type", "submit"))
    .expect(
      XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent
    )
    .eql("An email was sent to your mail box. Please check the email");
});

// test("Reset pass with wrong fomat email", async (t) => {
//   await t
//     .click(
//       XPathSelector(
//         '//*[@id="__next"]/div/section[1]/div/div/form/div[3]/span/a'
//       )
//     )
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhht22!dipro.vn"
//     )
//     .click(Selector("button").withAttribute("type", "submit"))
//     .expect(Selector(".text-red-700").textContent)
//     .eql("Must be a valid email");
// });
