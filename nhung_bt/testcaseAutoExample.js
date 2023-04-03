import { ClientFunction, Selector } from 'testcafe';
// import XPathSelector from './xpath-selector';

fixture`TestCafe example page`
    .page('https://devexpress.github.io/testcafe/example/');
test('Case1', async t => {
      await t 
      .expect(Selector('#main-form > div > header > h1').textContent).eql("Example");

}


)
test('Case 3', async t => {
    const checkbox1 = Selector('#remote-testing');
    await t 
      .click(checkbox1)
      .expect(checkbox1.checked).ok()
      .click(checkbox1)
      .expect(checkbox1.checked).notOk()
  })


  test('Case 4', async t => {
     const checkbox1 = Selector('#remote-testing');
     const checkbox2 = Selector('#reusing-js-code');
     const checkbox3 = Selector('#background-parallel-testing');
     const checkbox4 = Selector('#continuous-integration-embedding');
     const checkbox5 = Selector('#traffic-markup-analysis');
    


    await t 
    .click(checkbox1)
    .expect(checkbox1.checked).ok()
   
    .click(checkbox2)
    .expect(checkbox2.checked).ok()
    .click(checkbox3)
    .expect(checkbox3.checked).ok()
    .click(checkbox4)
    .expect(checkbox4.checked).ok()
    .click(checkbox5)
    .expect(checkbox5.checked).ok()
  

  }
  )
test('Case 5+10+11+12', async t => {
    
    await t 
     .click(Selector('#windows'))
     .click(Selector('#macos'))
     .click(Selector('#linux'))
}
)


test('Test case 6: Move slider to 3', async t => {
    const checkbox6 = Selector('#tried-test-cafe');
    const slider = Selector('#slider > span');
    await t
        .click(checkbox6)
        .click('#slider > span')
        .drag('#slider > span', 360, 0, { offsetX: 10, offsetY: 10 })
        .expect(Selector('#main-form > div > div.form-bottom > fieldset:nth-child(2) > div > div.slider-values.active > div:nth-child(3)').textContent).eql('3')
        .drag(slider, -240, 0, { offsetX: 10, offsetY: 10 })
        .expect(Selector('#main-form > div > div.form-bottom > fieldset:nth-child(2) > div > div.slider-values.active > div:nth-child(1)').textContent).eql('1')
})

test('Test case 7', async t => {
    const dropdown = Selector('#preferred-interface');
    await t 
         .click(dropdown)
         .click(dropdown.find('option').withText('Command Line'))
         .expect(dropdown.value).eql('Command Line')
         .click(dropdown)
         .click(dropdown.find('option').withText('JavaScript API'))
         .expect(dropdown.value).eql('JavaScript API')
}
)


test('Case2', async t => {
    
   await t
    .typeText('#developer-name', 'John Doe')
    .click('#submit-button')

    .expect(Selector('#article-header').innerText).eql('Thank you, John Doe!')

}


)


  




