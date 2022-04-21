describe('Hooks concept start',()=>{
        beforeEach(()=>{
            cy.visit('/')
            cy.get('input[id="txtUsername"]').type('Admin')
            cy.get('input[id="txtPassword"]').type('admin123 ')
            cy.get('input[id="btnLogin"]').click()
            
        })
  
it('case 1',()=>{
    cy.get('div[id="mainMenu"]').find('a[id="menu_admin_viewAdminModule"]')
    .should('have.text',"Admin")
})
})