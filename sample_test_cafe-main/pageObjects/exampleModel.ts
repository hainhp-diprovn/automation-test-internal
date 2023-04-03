import { Selector, t } from "testcafe"

class exampleModel {
    nameInput: Selector;
    submitButton: Selector;
    checkBox1: Selector;
    checkBox2: Selector;
    checkBox3: Selector;
    checkBox4: Selector;
    checkBox5: Selector;
    usedCheckBox: Selector;
    sliderBar: Selector;
    radioButton1: Selector;
    radioButton2: Selector;
    radioButton3: Selector;
    dropDownList: Selector;
    sliderBarValue: Selector;

    constructor() {
        this.nameInput = Selector('#developer-name')
        this.submitButton = Selector('#submit-button')
        this.checkBox1 = Selector('#remote-testing')
        this.checkBox2 = Selector('#reusing-js-code')
        this.checkBox3 = Selector('#background-parallel-testing')
        this.checkBox4 = Selector('#continuous-integration-embedding')
        this.checkBox5 = Selector('#traffic-markup-analysis')
        this.usedCheckBox = Selector('#tried-test-cafe')
        this.sliderBar = Selector('.slider-value')
        this.radioButton1 = Selector ('#windows')
        this.radioButton2 = Selector ('#macos')
        this.radioButton3 = Selector ('#linux')
        this.dropDownList = Selector('#preferred-interface')
        this.sliderBarValue = Selector ('.ui-slider-handle')
    }
    async example() {
        await t
            .typeText(this.nameInput, "Phuong")
            .click(this.submitButton)
    }

}
export default new (exampleModel);