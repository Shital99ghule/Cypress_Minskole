describe('validate the login credintial',()=>{
    it.skip('test case 1st check with the valid crediantial',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
    })

    it.skip('Test case 2nd check with the invalid crediential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin12345')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text','Invalid credentials')
    })

it.only('test case 3rd for sign up validation zoomin for valid',()=>{
    cy.visit('https://www.zoomin.com/sign-up?%2F')
    cy.get('input[name="name"]').type('shital')
    cy.get('input[name="email"]').type('ghuleshital2005@gmail.com')
    cy.get('input[class="number-input"]').type('7498461914')
    cy.get('input[name="password"]').type('12345')
    cy.get('button[type="submit"]').click()
    // cy.get('a[href="/sign-in?%2F"]').should('be.visible')
    cy.get('a[href="/sign-in?%2F"]').should('be.visible').click()


})
// it('test case 4th for sign up validation zoomin for valid',()=>{
//     cy.visit('https://www.zoomin.com/sign-up?%2F')


// })

})