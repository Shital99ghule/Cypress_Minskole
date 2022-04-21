// const cypress = require("cypress")




describe("Dynamic dropdown", () => {
    it('dropdown testing', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('div[data-reactid="164"] >._2WNb >div[class="fl-input-container"] >#text-box').clear().type('chen')
        cy.get('div[class="_16Y_"]').find('._3ewH').find('div[class="_3sXO"]').each((el, index) => {
            let station = el.text()
            if (station == 'MAS - MGR Chennai Central') {
                cy.wrap(el).click()
            }
        })
    })
  it.skip('Dynamic dropdown',()=>{
      cy.visit('https://codenboxautomationlab.com/practice/')
      cy.get('#autocomplete').clear().type('indi')
      cy.get('li[class="ui-menu-item"]').each((el,index)=>{
          let ele=el.text()
          if(ele =='India'){
              cy.wrap(el).click()
          }
      })
  })


  it.skip('checkbox assertion',()=>{
      cy.visit('https://codenboxautomationlab.com/practice/')
    //   cy.get('input[id="checkBoxOption1"]').check()
      cy.get('input[id="checkBoxOption1"]').check().should('be.checked')
      cy.get('input[id="checkBoxOption2"]').check().should('be.checked')
      cy.get('input[id="checkBoxOption3"]').check().should('be.checked')


  })


  it.only('radio button',()=>{
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('input[value="radio1"]').click().should('be.checked')
    cy.get('input[value="radio2"]').click().should('be.checked')
    cy.get('input[value="radio3"]').click().should('be.checked')

})

})