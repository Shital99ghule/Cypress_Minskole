import Contact from "../../../POM/contact_form";
let contact=new Contact()
describe('contact for assertion',()=>{
    it('contact submission',()=>{
        contact.visitSite()
        cy.get(contact.firstName).type('shital')
        cy.get(contact.lastName).type('ghule')
        cy.get(contact.email).type('ghuleshital2005@gmail.com')
        cy.get(contact.message).type('testing....')
        contact.submitClick()
        cy.get(contact.thankyou).should('have.text','Thank You for your Message!')

    })
})