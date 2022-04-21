import radioButtons from "../../../POM/checkbox";
let radiobuttons=new radioButtons()
describe('radio Buttons',()=>{
    it('TC- radio button',()=>{
        radiobuttons.radioVisit()
        cy.get(radiobuttons.input1).check()
        cy.get(radiobuttons.input2).check()
        cy.get(radiobuttons.input1).should('not.be.checked')
        cy.get(radiobuttons.input3).check()
        cy.get(radiobuttons.input2).should('not.be.checked')
        cy.get(radiobuttons.input4).check()
        cy.get(radiobuttons.input3).should('not.be.checked')
        cy.get(radiobuttons.input5).check()
        cy.get(radiobuttons.input4).should('not.be.checked')





    })
})