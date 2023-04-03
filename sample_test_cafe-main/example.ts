import { Selector } from "testcafe";
import exampleModel from "./pageObjects/exampleModel";
fixture`Example testcafe`.page(
  "https://devexpress.github.io/testcafe/example/");

// Case 1: 
test("Redirect to the next page",
  async (t) => {
    exampleModel.example
    await t
      .typeText(exampleModel.nameInput, "Phuong")
      .click(exampleModel.submitButton)
      .expect(Selector(".result-content").textContent).contains('Thank you, Phuong!');
  });
// Case 2: 
test("Uncheck the checkbox", async (t) => {
  await t
    .doubleClick(exampleModel.checkBox1)
    .expect(exampleModel.checkBox1.checked).eql(false)
});
// Case 3: 
test("Check all the checkbox", async (t) => {
  await t
    .click(exampleModel.checkBox1)
    .click(exampleModel.checkBox2)
    .click(exampleModel.checkBox3)
    .click(exampleModel.checkBox4)
    .click(exampleModel.checkBox5)
    .expect(exampleModel.checkBox1.checked).eql(true)
    .expect(exampleModel.checkBox2.checked).eql(true)
    .expect(exampleModel.checkBox3.checked).eql(true)
    .expect(exampleModel.checkBox4.checked).eql(true)
    .expect(exampleModel.checkBox5.checked).eql(true)
});
// Case 4: 
test("Checkbox I have tried TestCafe", async (t) => {
  await t
    .click(exampleModel.usedCheckBox)
    .expect(exampleModel.sliderBar.exists).eql(true)
});
//Case 5: 
test("Test radio button ", async (t) => {
  await t
    .click(exampleModel.radioButton1)
    .click(exampleModel.radioButton2)
    .click(exampleModel.radioButton3)
});
//Case 6: 
test("Test dropdown list interface option Command Line", async (t) => {
  await t
    .click(exampleModel.dropDownList)
    .click(exampleModel.dropDownList.find("option").withText("Command Line"))
    .expect(exampleModel.dropDownList.value)
    .eql("Command Line");
});
// Case 7: 
test("Test dropdown list interface option JavaScript API", async (t) => {
  await t
    .click(exampleModel.dropDownList)
    .click(exampleModel.dropDownList.find("option").withText("JavaScript API"))
    .expect(exampleModel.dropDownList.value).eql("JavaScript API");
});
//Case 8: 
test("Test dropdown list interface option Both", async (t) => {
  await t
    .click(exampleModel.dropDownList)
    .click(exampleModel.dropDownList.find("option").withText("Both"))
    .expect(exampleModel.dropDownList.value)
    .eql("Both");
});

// Case 9: 
test("Moving slider", async (t) => {
  const totalSize = 813.5;
  const totalCount = 10;
  const dragToIndex = 9;
  const slideThumbSize = 18.8;
  const space =
    (totalSize / (totalCount - 1)) * (dragToIndex - 1) - slideThumbSize / 2;

  await t
    .click(exampleModel.usedCheckBox)
    .dragToElement(
      exampleModel.sliderBarValue,
      exampleModel.sliderBar.withText(`${dragToIndex}`)
    )
    .expect(exampleModel.sliderBarValue.offsetLeft)
    .eql(space);
});
