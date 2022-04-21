describe('learn events',()=>{
    it('tc-3: events1', () => {
        cy.visit('https://www.orangehrm.com/');
        cy.get('a[class="link"]').eq(0).trigger('mouseover')
        cy.get('div[class="secondary"]').eq(0).invoke('show')
            .should('be.visible')
    })
    
    it('tc-4: events2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[id="txtUsername"]').type('admin');
        cy.get('input[id="txtPassword"]').type('admin123');
        cy.get('input[id="btnLogin"]').click()
        //cy.contains('Admin').trigger('mouseover', {bubbles: false})
        cy.get('a[class="firstLevelMenu"]').eq(0).invoke('show').trigger('mouseover')
        cy.get('a[class="firstLevelMenu"]').eq(0).screenshot()
        //s document.getSelection(".menu > ul > li > ul").style.opacity = "0.5";
        cy.get('ul#mainMenuFirstLevelUnorderedList ul li a#menu_admin_UserManagement')
            .invoke('show')
            .should('be.visible')
            .trigger('mousedown')
    })
})