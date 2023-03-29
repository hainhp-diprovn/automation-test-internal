import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

class ExampleModel {
  titleText: Selector;
  nameInput: Selector;
  checkBox1: Selector;
  checkBox2: Selector;
  checkBox3: Selector;
  checkBox4: Selector;
  checkBox5: Selector;
  radioButton1: Selector;
  radioButton2: Selector;
  radioButton3: Selector;
  dropDownList: Selector;
  optionList1: Selector;
  optionList2: Selector;
  usedCheckBox: Selector;
  sliderBar: Selector;
  sliderBar3: Selector;
  sliderBar6: Selector;
  commentField: Selector;
  submitButton: Selector;
  theNextPage: Selector;

  constructor() {
    this.titleText = Selector("h1").withText("Example");
    this.nameInput = Selector("input").withAttribute("name", "name");
    this.checkBox1 = Selector("input").withAttribute("name", "remote");
    this.checkBox2 = Selector("input").withAttribute("name", "re-using");
    this.checkBox3 = Selector("input").withAttribute("name", "background");
    this.checkBox4 = Selector("input").withAttribute("name", "CI");
    this.checkBox5 = Selector("input").withAttribute("name", "analysis");
    this.radioButton1 = Selector("input").withAttribute("id", "windows");
    this.radioButton2 = Selector("input").withAttribute("id", "macos");
    this.radioButton3 = Selector("input").withAttribute("id", "linux");
    this.dropDownList = Selector("select").withAttribute(
      "id",
      "preferred-interface"
    );
    this.optionList1 = Selector("select").withText("JavaScript API");
    this.optionList2 = Selector("select").withText("Both");
    this.usedCheckBox = Selector("input").withAttribute(
      "name",
      "tried-test-cafe"
    );
    this.sliderBar = Selector("div").withAttribute("id", "slider");
    this.sliderBar3 = Selector("span").withAttribute(
      "style",
      "left: 22.2222%;"
    );
    this.sliderBar6 = Selector("span").withAttribute(
      "style",
      "left: 55.5556%;"
    );
    this.commentField = Selector("textarea").withAttribute("id", "comments");
    this.submitButton = Selector("button").withAttribute("type", "submit");
    this.theNextPage = Selector("h1").withAttribute("id", "article-header");
  }
}

export default new ExampleModel();
