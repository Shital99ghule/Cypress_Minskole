
///<reference type=cypress>
describe("Button Actions",()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/buttons')

    })
    it.skip('dblclick() in buuton action',()=>{

        cy.get('button[id="doubleClickBtn"]').dblclick()
        cy.get('p[id="doubleClickMessage"]').should('be.visible','You have done a double click')

    })
    it.skip('rightclick()',()=>{
        cy.get('button[id="rightClickBtn"]').rightclick()
        cy.get('p[id="rightClickMessage"]').should('be.visible','You have done a right click')
    })
    // it.only('click()',()=>{
    //  cy.get('button[id*="jtGMv"]').click()
    //  cy.get('p[]').should('be.visible','')
    // })

})