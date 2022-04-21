 import DropDwon from "../../../POM/checkbox";

let dropdown=new DropDwon()
describe('select dropdown,radio buttons checkboxes',()=>{
    it('Tc 1 - for dropdown',()=>{
        dropdown.DropDwonVisit()
        // cy.get(dropdown.seletct1).find(dropdown.option1).click({force:true})
       cy.get(dropdown.seletct1).select('JAVA')
       cy.get(dropdown.seletct1).select('C#')
       cy.get(dropdown.seletct1).select('Python')
       cy.get(dropdown.seletct1).select('SQL')


       cy.get(dropdown.seletct2).select('Eclipse')
       cy.get(dropdown.seletct2).select('Maven')
       cy.get(dropdown.seletct2).select('TestNG')
       cy.get(dropdown.seletct2).select('JUnit')


       cy.get(dropdown.seletct3).select('HTML')
       cy.get(dropdown.seletct3).select('CSS')
       cy.get(dropdown.seletct3).select('JavaScript')
       cy.get(dropdown.seletct3).select('JQuery')

       

    })
})