
//<reference type="cypress"
describe('trigger',()=>{
    it.skip('drag and drop using trigger for transfar the data to the another Dom element',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        const dataTransfer= new DataTransfer
        cy.get('li[ id="menu-hamburger"]').trigger('dragstart',{dataTransfer})
        cy.get('div[id="plate').trigger('drop',{dataTransfer})
        
    })
    it.only('drag and drop without using triiger',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('li[id="menu-ice-cream" ]').drag('#plate')
    })

})