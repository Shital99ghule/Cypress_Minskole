// const type = require("cypress")


describe('Mouse Events',()=>{
    it.skip('mouse up,mouse down,mousemove',()=>{
        cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
        cy.get('div[id="draggable"]').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').should('have.class','ui-widget-header ui-droppable ui-state-highlight')


    })

    it('drag and drop using drag only',()=>{
        cy.visit('https://codenboxautomationlab.com/')
        cy.contains('Contact Us').scrollIntoView()
        cy.get('.block-editor-rich-text__editable >span').scrollIntoView()
        cy.get('footer').scrollIntoView()
    })
})