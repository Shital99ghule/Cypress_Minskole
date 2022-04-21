import Disabled from "../../../POM/checkbox";
let disabled=new Disabled()
describe('disabeled Attribute',()=>{
    it('disabeled',()=>{
        disabled.disabledVisit()
        cy.get(disabled.input1).check()
        cy.get(disabled.input2).should('have.attr','disabled')
        cy.get(disabled.input3).check()

        cy.get(disabled.select).select('Apple')
        cy.get(disabled.option).should('have.value','orange')

        cy.get(disabled.select).select('Pear')
        cy.get(disabled.select).select('Grape')



    })
   
})
