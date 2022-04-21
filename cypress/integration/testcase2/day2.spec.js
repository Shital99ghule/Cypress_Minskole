
{/* <reference types="cypress" /> */ }
describe('leanr cypress', () => {
    it.skip('to test the single checkbox test', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[ id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click()
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[value="option-2"]').check().should('be.checked');
        // cy.get('input[value="option-4"]').check().should('be.checked')
    })

    it.skip('to test the single checkbox test is unchecked', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be', 'checked')

    })

    it.skip('to test the single checkbox test to using each', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').each((el, index) => {
            cy.wrap(el).check()
        })
    })

    it.skip('to test the check box passing the option', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
    })

    it.skip('To test the radio button is checked',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="blue"]').check().should('be.checked')
        // cy.get('input[value="green"]').should('not.be.checked')
        cy.get('input[ value="yellow"]').check().should('be.checked')
        cy.get('input[value="orange"]').check().should('be.checked')
         cy.get('input[value="purple"]').check().should('be.checked')
        // cy.get('input[value="green"]').check()
        // cy.get('input[ value="blue"]').should('to.be.checked')
        // cy.get('input[ value="yellow"]')
        // cy.get('input[value="orange"]')
        // cy.get('input[value="purple"]')
        }) 
        it('to test that the element is disabled',()=>{
            cy.visit('https://webdriveruniversity.com/')
            cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
            cy.get('input[value="lettuce"]').check().should('be.checked')
            cy.get('input[value="cabbage"]').should('have.attr', 'disabled')
            cy.get('input[value="pumpkin"]').check().should('have.attr','checked')
            cy.get('select[class="dropdown-menu-lists"]').eq(3).select('Grape').should('have.value', 'grape')
            cy.get('select[class="dropdown-menu-lists"]').eq(3).select('Grape').should('have.value', 'grape')

           
        })
     
            // it('to test dropdown selection',()=>{
            //     cy.visit('https://webdriveruniversity.com/')
            //     cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
            //     cy.get("")
                
            
            
            // })

    })
