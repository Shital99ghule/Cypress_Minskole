
{/* <reference types="cypress" /> */ }
describe('learn cypress', () => {
    it('visit the site', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click()
        //implicit--->should
        cy.url().should('include', 'Contact-Us')
        // cy.url().then((url) =>{
        //     expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html');
        // })

    })
    // it('test case 2',()=>{
    // cy.get('input[class="feedback-input"]').eq(0).type('shital')
    // cy.get('input[class="feedback-input"]').eq(1).type('ghule')
    // cy.get('input[class="feedback-input"]').eq(2).type('shital@gmail.com')
    // cy.get('textarea[name="message"]').type('testing running.....')
    // cy.get('input[type="submit"]').click()
    // cy.get('div[id="contact_reply"] > h1').should('have.text','Thank You for your Message!')


    // })
    var ele = ['amol', 'bhagwat', 'amol@gmail.com']
    it('case 2', () => {
        cy.get('input[class="feedback-input"]').each((element, index) => {
            cy.wrap(element).type(ele[index])
            //cy.log(ele[index])
            //    cy.log(index)
        })
        cy.get('textarea[name="message"]').type('testing running.....')
        cy.get('input[type="submit"]').click()
        cy.get('div[id="contact_reply"] > h1').should('have.text', 'Thank You for your Message!')

    })





})