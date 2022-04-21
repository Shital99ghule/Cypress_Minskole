describe(" Actions",()=>{
it('blur methhod and focus method', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('#txtUsername').first().focus().should('be.focused')
    cy.get('#txtUsername').first().blur().should('not.be.focused')
 
})
it.only('find method and within', () =>{
    cy.visit('https://www.orangehrm.com/');
    cy.get('ul[class="nav navbar-nav navbar-left default-nav web-menu"]').find('a').should('be.visible')
   cy.get('div[class="collapse navbar-collapse"]').within(()=>{
       cy.get('a[class="link"]').first().should('contain','Platform')
   })
})
})