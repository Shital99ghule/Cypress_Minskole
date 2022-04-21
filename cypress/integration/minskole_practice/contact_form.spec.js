// const cypress = require("cypress")

//{<reference types="cypress" >}
describe('verify the url', () => {
    it.skip('test the contact form inputs and buttons', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click()
        cy.get('input[name="first_name"]').type('snehal')
        cy.get('input[name="last_name"]').type('ghule')
        cy.get('input[name="email"]').type('ghuleshital2005@gmai.com')
        cy.get('textarea[name="message"]').type('its testing...')
        cy.get('input[type="submit"]').click()
        cy.contains('Thank You for your Message!')
    })
    it('test for the resset button', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click()
        cy.get('input[name="first_name"]').type('snehal')
         cy.get('input[name="last_name"]').type('ghule')
        cy.get('input[name="email"]').type('ghuleshital2005@gmai.com')
        cy.get('textarea[name="message"]').type('its testing...')
        cy.get('input[type="reset"]').click()
        cy.get('input[type="submit"]').click()
        cy.contains('Error: all fields are required')

    })

})