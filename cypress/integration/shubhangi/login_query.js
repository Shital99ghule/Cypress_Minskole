describe.skip("Verify the login functionality", () => {
it("verify the login with valid credentials", () => {
cy.visit('https://app.calliope.pro/users/sign_in')
//cy.wait(5000)
cy.get('form .input-group > #user_email').eq(0)
.type('shubhangi5693@gmail.com')
cy.get('.form-control.password.optional').eq(0).type('Test@123')
cy.get('button[class="btn btn-primary submit "]').eq(0).click()

})

})