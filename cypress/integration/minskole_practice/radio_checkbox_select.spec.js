describe('verify the checkboxes(),radio(),and select()',()=>{
    it('vrify the  using check()',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[href="Dropdown-Checkboxes-RadioButtons/index.html"]').invoke('removeAttr','target').click()
        // cy.get('input[value="option-1"]').check().should('be.checked')
        // cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
        // let option=['option-1','option-2','option-3','option-4']
cy.get('input[type="checkbox"]').each(function(el,index){     
           cy.wrap(el).check().should('be.checked')

           


})
        
    })
})