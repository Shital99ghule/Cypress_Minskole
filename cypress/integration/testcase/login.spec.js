// const cypress = require("cypress")
// const { it } = require("mocha")

describe ('Login Functionality',()=>{

    it('Login with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible','dashboard')
        
    })

    it('login with invalid credentials',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[ name="txtUsername"]').type('admin')
        cy.get('input[name="txtPassword"]').type('adm123')
        cy.get('input[ name="Submit"]').click()
        cy.get('#divLoginButton > span').should('have.text','Invalid credentials')
    })
})