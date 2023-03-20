import examplemode from "./examplemode";
fixture`Example testcafe`.page(
  "https://devexpress.github.io/testcafe/example/"
);
// Case 1: Chuyen den trang tiep theo khi nhap te va nhan submit
test("Redirect to the next page when input name and click submit button", async (t) => {
  await t
    .typeText(examplemode.nameInput, "Nhi")
    .click(examplemode.submitButton)
    .expect(examplemode.theNextPage.textContent)
    .eql("Thank you, Nhi!");
});
// Case 2: Xac nhan co the bo chon checkbox
test("Uncheck the checkbox", async (t) => {
  await t
    .click(examplemode.checkBox1)
    .click(examplemode.checkBox1)
    .expect(examplemode.checkBox1.checked).notOk;
});
// Case 3: Xac nhan co the chon nhieu checkbox
test("Uncheck the checkbox", async (t) => {
  await t
    .click(examplemode.checkBox1)
    .click(examplemode.checkBox2)
    .click(examplemode.checkBox4)
    .expect(examplemode.checkBox1.checked).ok;
});
// Case 4: Xac nhan co the chon checkbox thu 2
test("the 2nd checkbox", async (t) => {
  await t.click(examplemode.checkBox2).expect(examplemode.sliderBar.checked).ok;
});
// Case 5: Xac nhan co the chon checkbox thu 3
test("the 3rd checbox", async (t) => {
  await t.click(examplemode.checkBox3).expect(examplemode.sliderBar.checked).ok;
});
// Case 6: Xac nhan co the chon checkbox thu 4
test("the 4th checkbox", async (t) => {
  await t.click(examplemode.checkBox4).expect(examplemode.sliderBar.checked).ok;
});
// Case 7: Xac nhan co the chon checkbox cuoi cung
test("the last checkbox", async (t) => {
  await t.click(examplemode.checkBox5).expect(examplemode.sliderBar.checked).ok;
});
// Case 8: Xac nhan slider checkbox enable khi tick checkbox 'I have tried TestCafe'
test("Slider and checkbox are enable when check checkbox I have tried TestCafe", async (t) => {
  await t.click(examplemode.usedCheckBox).expect(examplemode.sliderBar.exists)
    .ok;
});
// Case 9: Xac nhan dropdown list interface option 1
test("Test dropdown list interface option 1", async (t) => {
  await t
    .click(examplemode.dropDownList)
    .click(examplemode.dropDownList.find("option").withText("JavaScript API"))
    .expect(examplemode.dropDownList.value)
    .eql("JavaScript API");
});
//Case 10: Xac nhan dropdown list interface option 2
test("Test dropdown list interface option 2", async (t) => {
  await t
    .click(examplemode.dropDownList)
    .click(examplemode.dropDownList.find("option").withText("Command Line"))
    .expect(examplemode.dropDownList.value)
    .eql("Command Line");
});
//Case 11: Xac nhan dropdown list interface option 3
test("Test dropdown list interface option 3", async (t) => {
  await t
    .click(examplemode.dropDownList)
    .click(examplemode.dropDownList.find("option").withText("Both"))
    .expect(examplemode.dropDownList.value)
    .eql("Both");
});
//Case 12: Xac nhan radio button 1
test("Test radio button 1", async (t) => {
  await t
    .click(examplemode.radioButton1)
    .expect(examplemode.radioButton1.value)
    .eql("Windows");
});
//Case 13: Xac nhan radio button 2
test("Test radio button 2", async (t) => {
  await t
    .click(examplemode.radioButton2)
    .expect(examplemode.radioButton2.value)
    .eql("MacOS");
});
//Case 14: Xac nhan radio button 3
test("Test radio button 3", async (t) => {
  await t
    .click(examplemode.radioButton3)
    .expect(examplemode.radioButton3.value)
    .eql("Linux");
});
//Case 15: Xac nhan slider
test("Moving slider", async (t) => {
  await t
    .click(examplemode.usedCheckBox)
    .click(examplemode.sliderBar)
    .pressKey("right")
    .expect(examplemode.sliderBar.value)
    .eql("2");
});
