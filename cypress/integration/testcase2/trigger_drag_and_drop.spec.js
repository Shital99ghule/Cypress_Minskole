describe('actions',()=>{
    it("drag and drop using trigger",()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        const dataTransfer=new DataTransfer()
        cy.get('#menu-fried-chicken').trigger("dragstart",{dataTransfer})
        cy.get('#plate').trigger('drop',{dataTransfer})
        cy.get('#menu-hamburger').trigger("dragstart",{dataTransfer})
        cy.get('#plate').trigger('drop',{dataTransfer})
        cy.get('#menu-ice-cream').trigger("dragstart",{dataTransfer})
        cy.get('#plate').trigger('drop',{dataTransfer})


        

    })
    it.skip("drag and drop without using trigger",()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-fried-chicken').drag('#plate-items')
        cy.get('#plate-items').should('be.visible')

    })
    it.skip('drag and drop using drag method directly',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')    //????????
        cy.get('#menu-hamburger').drag('#plate-items')
    

})

it.only('drag and drop using drag method directly',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')    //????????
    cy.get('#menu-hamburger').drag('#plate-items')

})
})


