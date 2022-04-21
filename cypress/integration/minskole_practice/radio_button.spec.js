// const { describe } = require("mocha");

// const { it } = require("mocha")


describe('To test the radio,checkbox and dropdown butoon ',()=>{
    it.skip('to check the checkbox button using click()',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[ value="option-1"]').click().should('not.be.checked')
        cy.get('input[value="option-2"]').click().should('be.checked')
        cy.get('input[value="option-2"]').click().should('not.be.checked')
        // cy.get('input[value="option-3"]').click().should('be.checked')
        // cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-4"]').click().should('be.checked')
        cy.get('input[value="option-4"]').click().should('not.be.checked')



    })

    it.skip('To check the checkbox button using check()',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
      cy.get('input[value="option-1"]').check().should('be.checked')
      cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
      cy.get('input[value="option-2"]').check().should('be.checked')
      cy.get('input[value="option-2"]').uncheck().should('not.be.checked')
       cy.get('input[value="option-3"]').check().should('be.checked')
    //    cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
      cy.get('input[value="option-4"]').check().should('be.checked')
      cy.get('input[value="option-4"]').uncheck().should('not.be.checked')

    })

    it.skip('to test the dropdown select and option',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('select[id="dropdowm-menu-1"]').select('JAVA').should('have.value','java')
        cy.get('select[id="dropdowm-menu-1"]').select('C#').should('have.value','c#')
        cy.get('select[id="dropdowm-menu-1"]').select('Python').should('have.value','python')
        cy.get('select[id="dropdowm-menu-1"]').select('SQL').should('have.value','sql')

        cy.get('select[id="dropdowm-menu-2"]').select('Eclipse').should('have.value','eclipse')
        cy.get('select[id="dropdowm-menu-2"]').select('Maven').should('have.value','maven')
        cy.get('select[id="dropdowm-menu-2"]').select('TestNG').should('have.value','testng')
        cy.get('select[id="dropdowm-menu-2"]').select('JUnit').should('have.value','junit')



        cy.get('select[id="dropdowm-menu-3"]').select('HTML').should('have.value','html')
        cy.get('select[id="dropdowm-menu-3"]').select('CSS').should('have.value','css')
        cy.get('select[id="dropdowm-menu-3"]').select('JavaScript').should('have.value','javascript')
        cy.get('select[id="dropdowm-menu-3"]').select('JQuery').should('have.value','jquery')



    })

    it('chek the raadio button and dropdown select and disabled',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="lettuce"]').check().should('be.checked')
        cy.get('input[value="cabbage"]').should('have.attr','disabled')
        cy.get('input[value="pumpkin"]').check().should('have.attr','checked')

         cy.get('select[id="fruit-selects"]').select('Apple').should('have.value','apple')
        //  cy.get('select[id="fruit-selects"]').should('have.attr','disabled')
         cy.get('select#fruit-selects option:disabled').should('have.value','orange')
         cy.get('select[id="fruit-selects"]').select('Pear').should('have.value','pear')
         cy.get('select[id="fruit-selects"]').select('Grape').should('have.value','grape')
        // cy.get('select#fruit-selects option:selected').should('have.value','grape')

    })

})