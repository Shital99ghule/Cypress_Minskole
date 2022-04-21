// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// const cypress = require('cypress')

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 require('@4tw/cypress-drag-drop');
 import 'cypress-iframe';
 require('cypress-downloadfile/lib/downloadFileCommand')
 import 'cypress-file-upload';
//this login custom command for https://opensource-demo.orangehrmlive.com/ URL

// Cypress.Commands.add('login',(username,password)=>{
//     cy.get('#txtUsername').type(username)
//         cy.get('#txtPassword').type(password)
//         cy.get('input[ name="Submit"]').click()

// })
//this login custom command for https://opensource-demo.orangehrmlive.com/ URL
// Cypress.Commands.add('login',(username,password)=>{
//     cy.get('#txtUsername').type(username)
//     cy.get('#txtPassword').type(password)
//     cy.get('input[id="btnLogin"]').click()
// })

// Cypress.Commands.add('contact',()={

// })

// *****************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// *****************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')



 })

 Cypress.Commands.add('validateTable', (id, value) => {


    let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get(`#t0${id}`).find('tr').as("tableRow")       
    cy.get('@tableRow').should('have.length',4)

    //[tr,tr,tr,tr]
    cy.get('@tableRow').each(function(el,index){
         if(index != 0){
            sum =  sum + Number(el.children().last().text())
         }
    }).then(()=>{

         expect(sum).to.equal(value)

    })

    


 })









//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })