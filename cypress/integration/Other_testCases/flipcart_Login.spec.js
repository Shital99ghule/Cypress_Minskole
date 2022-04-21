describe('Login with the valid and invalid  crediential',()=>{
    it('TC-1  Login with valid credintial',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('div[class="_1psGvi _3BvnxG"]>div>a[class="_1_3w1N"]').click()
        cy.get('div[class="IiD88i _351hSN"]>input').first().type('ghuleshital2005@gmail.com')
        cy.get('div[class="IiD88i _351hSN"]>input').last().type(123456789)
        cy.get('div[class="_1D1L_j"]>button').click()
        cy.get('input[class="_2IX_2- VJZDxU"]').type(7498461914)
        cy.get('div[class="_1D1L_j"]>button').click()
        // cy.contains('Your username or password is incorrect').should('be.visible')

    })


    it('TC-2  Login with Invalid credintial',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('div[class="_1psGvi _3BvnxG"]>div>a[class="_1_3w1N"]').click()
        cy.get('div[class="IiD88i _351hSN"]>input').first().type(7498461914)
        cy.get('div[class="IiD88i _351hSN"]>input').last().type(123456789)
        cy.get('div[class="_1D1L_j"]>button').click()
        cy.contains('Your username or password is incorrect').should('be.visible')

    })
})