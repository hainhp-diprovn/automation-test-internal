import { ClientFunction, Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

fixture`The signin page`
    .page('https://devexpress.github.io/testcafe/example/');
//Case 1
test('Check UI must have title is Example', async t => {
    await t
        .expect(XPathSelector('//*[@id="main-form"]/div/header/h1').textContent)
        .eql("Example");
});

// Case 2
test('When submit direct to thank you page', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'name'), 'nhannguyen')
        .click(Selector('button').withAttribute('type', 'submit'))
        .expect(XPathSelector('//*[@id="article-header"]').textContent).eql("Thank you, nhannguyen!");
});

// Case 3
test('Checkbox remote can uncheck', async t => {
    const checkbox = Selector('input').withAttribute('name', 'remote');

    await t
        .click(checkbox)
        .expect(checkbox.checked).ok()
        .click(checkbox)
        .expect(checkbox.checked).notOk();
});

// Case 4
test('Can checked all checkboxes', async t => {
    const remoteCheckbox = Selector('input').withAttribute('name', 'remote');
    const reusingCheckbox = Selector('input').withAttribute('name', 're-using');
    const backgroundCheckbox = Selector('input').withAttribute('name', 'background');
    const CICheckbox = Selector('input').withAttribute('name', 'CI');
    const analysisCheckbox = Selector('input').withAttribute('name', 'analysis');
    const triedTestcafeCheckbox = Selector('input').withAttribute('name', 'tried-test-cafe');

    await t
        .click(remoteCheckbox)
        .click(reusingCheckbox)
        .click(backgroundCheckbox)
        .click(CICheckbox)
        .click(analysisCheckbox)
        .click(triedTestcafeCheckbox)
        .expect(remoteCheckbox.checked).ok()
        .expect(reusingCheckbox.checked).ok()
        .expect(backgroundCheckbox.checked).ok()
        .expect(CICheckbox.checked).ok()
        .expect(analysisCheckbox.checked).ok()
        .expect(triedTestcafeCheckbox.checked).ok();
    });

// Case 5
test('Can checked radio button', async t => {
    const windowRadioButton = Selector('input').withAttribute('id', 'windows');
    const macOSRadioButton = Selector('input').withAttribute('id', 'macos');
    const linuxRadioButton = Selector('input').withAttribute('id', 'linux');

    await t
        .click(windowRadioButton)
        .expect(windowRadioButton.checked).ok()
        .click(macOSRadioButton)
        .expect(macOSRadioButton.checked).ok()
        .click(linuxRadioButton)
        .expect(linuxRadioButton.checked).ok();
});

// Case 6
test('Verify slider is enable', async t => {
    const triedTestcafeCheckbox = Selector('input').withAttribute('name', 'tried-test-cafe');
    const divSlider = XPathSelector('//*[@id="main-form"]/div/div[2]/fieldset[2]/div/div[2]');

    await t
        .click(triedTestcafeCheckbox)
        .expect(divSlider.hasClass('active')).ok();
});

// Case 7
test('Check data of dropdown', async t => {
    const dropdown = Selector('select').withAttribute('id', 'preferred-interface');

    await t
        .click(dropdown)
        .expect(dropdown.child(0).textContent).eql('Command Line')
        .expect(dropdown.child(1).textContent).eql('JavaScript API')
        .expect(dropdown.child(2).textContent).eql('Both');
});

// Case 8
test('Can select first option', async t => {
    const dropdown = Selector('select').withAttribute('id', 'preferred-interface');
    
    await t
        .click(dropdown)
        .click(dropdown.child(0))
        .expect(dropdown.value).eql('Command Line');
});

// Case 9
test('After select first option, can select second option', async t => {
    const dropdown = Selector('select').withAttribute('id', 'preferred-interface');
    
    await t
        .click(dropdown)
        .click(dropdown.child(0))             
        .expect(dropdown.value).eql('Command Line')
        .click(dropdown)
        .click(dropdown.child(1))    
        .expect(dropdown.value).eql('JavaScript API');
});

// Case 10
test('Can checked windows radio button', async t => {
    const windowRadioButton = Selector('input').withAttribute('id', 'windows');

    await t
        .click(windowRadioButton)
        .expect(windowRadioButton.checked).ok()
        .expect(windowRadioButton.value).eql('Windows');
});

// Case 11
test('Can checked MacOS radio button', async t => {
    const macOSRadioButton = Selector('input').withAttribute('id', 'macos');

    await t
        .click(macOSRadioButton)
        .expect(macOSRadioButton.checked).ok()
        .expect(macOSRadioButton.value).eql('MacOS');
});

//Case 12
test('Can checked Linux radio button', async t => {
    const linuxRadioButton = Selector('input').withAttribute('id', 'linux');

    await t
        .click(linuxRadioButton)
        .expect(linuxRadioButton.checked).ok()
        .expect(linuxRadioButton.value).eql('Linux');
});

//Case 13
test('Moving slider', async t => {
    const triedTestcafeCheckbox = Selector('input').withAttribute('name', 'tried-test-cafe');
    const span = Selector('div').withAttribute('id', 'slider').child('span');
    const slideValue3 = Selector('div').withExactText('3');
    
    await t
        .click(triedTestcafeCheckbox)
        .click(span)
        .dragToElement(span, slideValue3)
        .expect(XPathSelector('//*[@id="slider"]/span').getAttribute('style')).eql('left: 22.2222%;');
});
