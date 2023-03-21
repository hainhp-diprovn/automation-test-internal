import { ClientFunction, Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

fixture`The signin page`.page("https://devexpress.github.io/testcafe/example/");

test("Verify mess Thankyou", async (t) => {
  //ok
  await t
    .typeText(
      Selector("input").withAttribute("id", "developer-name"),
      "TrinhDTN"
    )
    .click(Selector("button").withAttribute("type", "submit"))
    // .expect(Selector("h1").withAttribute("id", "article-header"))
    .expect(XPathSelector('//*[@id="article-header"]').textContent)
    .eql("Thank you, TrinhDTN!");
});

test("TC2: Verify can untickbox", async (t) => {
  //ok
  await t.doubleClick(Selector("label").withAttribute("for", "remote-testing"));
});

test("TC3: Verify can click all tickbox", async (t) => {
  //ok
  await t.click(Selector("label").withAttribute("for", "remote-testing"));
  await t.click(Selector("label").withAttribute("for", "reusing-js-code"));
  await t.click(
    Selector("label").withAttribute("for", "background-parallel-testing")
  );
  await t.click(
    Selector("label").withAttribute("for", "continuous-integration-embedding")
  );
  await t.click(
    Selector("label").withAttribute("for", "traffic-markup-analysis")
  );
});

test("TC5: Check can select radion button", async (t) => {
  //ok
  await t.click(Selector("label").withAttribute("for", "windows"));
  await t.click(Selector("label").withAttribute("for", "macos"));
  await t.click(Selector("label").withAttribute("for", "linux"));
});

test("TC6: Verify slider and textbox are enable when click on checkbox I have tried TestCafe", async (t) => {
  // ok
  await t
    .click(Selector("label").withAttribute("for", "tried-test-cafe"))
    .expect(Selector("div").withAttribute("id", "slider").exists).ok;
});
