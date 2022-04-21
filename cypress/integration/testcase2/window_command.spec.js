
describe('command',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('cy.document',()=>{
cy.visit('http://practice.automationtesting.in/')
cy.document().then(doc=>{
   expect(doc.title).to.eq('Automation Practice Site')
})
    })


    it('using widow() command',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.window().then(win=>{
            cy.log(win.location)
            expect(win.location.href).to.eq('http://practice.automationtesting.in/')

            let newUrl="https://twitter.com/krishnasakinala"
            win.location.href=newUrl
            cy.url().should('eq','https://twitter.com/krishnasakinala')

        })
    })
})