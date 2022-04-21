/// <reference types="cypress" />
//var arr = ['ipad-2','ipad-mini','macbook-11','samsung-note9']
describe('Learn Screenshot', () => {
    beforeEach(()=>{
        cy.visit('https://www.amazon.in/')
    })
    it('test case 1', () => {
       cy.screenshot('amazon')   // amazon is file name
        
    })
    it('test case 2  cliping', () => {
        cy.screenshot({ clip: { x: 20, y: 20, width: 400, height: 300 } })
     })
     it('test case 3   for perticular element', () => {
      cy.get('a[aria-label="Amazon"]').screenshot('element')  // element if the file name to in
      // which screenshot will be saaved
      
     })
})
describe('Learn Viewports', () => {
    
    it('test case 1 with preset', () => {
      cy.viewport('iphone-8');
      cy.visit('https://www.amazon.in/ref=nav_logo')
        
    })
    it('test case 2 in macbook', () => {
       cy.viewport('macbook-16')
       cy.visit('https://www.amazon.in/ref=nav_logo')
     })
     it('test for the various devices', () => {
       
      for(let i of arr){
       cy.viewport(i)
       cy.visit('https://www.amazon.in/ref=nav_logo')
       
      }
      
     })
     it('test with the width and height', () => {
        cy.viewport(414,896)
        cy.visit('https://www.amazon.in/ref=nav_logo')
      })
})
describe('Learn retries and other commands', () => {
   
    it('test case 1 retries in open mode', () => {
   cy.title().should('include','amazon')
        
    })
    it('test case 2  title', () => {
        cy.visit('https://www.amazon.in/')
       cy.title()
       .should('have.text','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
     })
     it('test case 3 Go', () => {
      
     })
     it('test case 4 Reload', () => {
        cy.visit('https://www.amazon.in/')
        cy.reload()
    })


it.only('viewport with various devices',()=>{
  for(let i of mobiles){
      cy.viewport(i)
      cy.visit('https://www.flipkart.com/')   
  }
})
})












