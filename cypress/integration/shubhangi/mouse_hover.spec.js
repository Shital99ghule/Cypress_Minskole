describe("Mouse Actions",()=>{
it('events', () =>{
        cy.visit('https://www.orangehrm.com/');
        cy.get('a[class="link"]').eq(0).trigger('mouseover')
        cy.get('div[class="secondary"]').eq(0).invoke('show')
        .should('be.visible')
       
     
    })
})