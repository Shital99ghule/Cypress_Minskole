import Checkboxes from "../../../POM/checkbox";
let checkbox=new Checkboxes()
describe('checkboxex',()=>{
    it('test case for checkbox',()=>{
      checkbox.CheckboxVisit()
      cy.get(checkbox.option1).check()
      cy.get(checkbox.option1).uncheck()
      cy.get(checkbox.option2).check()
      cy.get(checkbox.option2).uncheck()

      cy.get(checkbox.option3).check()
      cy.get(checkbox.option4).check()
      cy.get(checkbox.option4).uncheck()

    })
})