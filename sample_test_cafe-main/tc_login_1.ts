import { ClientFunction, Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

test("Login with invalid email", async (t) => {
  await t
    .typeText(
      Selector("input").withAttribute("name", "email"),
      "linhhta1@dipro.vn"
    )
    .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
    .click(Selector("div").child("button"))
    .expect(
      XPathSelector(
        '//*[@id="__next"]/div/section[1]/div/div/div[2]/div/div[2]'
      ).textContent
    )
    .eql("Username or password is not correct");
});

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
    .click(Selector("type").withAttribute("submit"))
    .expect(
      XPathSelector('//*[@id="__next"]/section/div/div/div[2]').textContent
    )
    .eql("An email was sent to your mail box. Please check the email");
});
