describe('Test the checkout functionality',()=>{
    beforeEach(() => {
        cy.visit('https://www.amazon.in/') 
    })
    it('Test One',()=>{
        cy.get('a[id="nav-link-accountList"]').trigger('mouseover')
        cy.contains('Sign in').click()
        cy.get('#ap_email').type(7498461914)
        cy.get('#continue').click()
        cy.get('#ap_password').type('amazon123')
        cy.get('#signInSubmit').click()
        cy.get('#twotabsearchtextbox').type('teddy')
        cy.get('div[class="autocomplete-results-container"]>div').each((el, i) => {
            // cy.log(el.text())
            let txt = el.text()
            if (txt === 'teddy bear') {
                cy.wait(2000)
                cy.get('div[class="autocomplete-results-container"]>div').eq(i).click()
                cy.contains('₹499').invoke('removeAttr', 'target').click()
                cy.contains('Add to Wish List').invoke('removeAttr', 'target').click()           
                // cy.contains('Create List').click()
                cy.contains('View Your List').click()
                cy.get('a[class="a-button-text a-text-center"]').eq(0).click({force:true})
                cy.contains('Added to Cart').should('be.visible')
                cy.get('a[id="nav-cart"]').click()
                cy.get('span[id="sc-buy-box-ptc-button"]').click()
                cy.get('span[class="a-button-inner"]>a').first().click({force:true})
                cy.get('h1[class="a-spacing-base"]').should('have.text','Select a payment method')
            }
        })
    })
})
