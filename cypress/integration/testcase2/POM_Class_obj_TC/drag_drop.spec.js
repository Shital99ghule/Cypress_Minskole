import Action from "../../../POM/action";
let action=new Action()
describe('Action',()=>{
    it('TC-1 Drag and drop adata',()=>{
        action.actionVisit()
        cy.get(action.drag).trigger('mousedown',{which:1})
        cy.get(action.drop).trigger('mousemove').trigger('mouseup',{force:true})
        cy.get(action.drop).should('have.class','ui-widget-header ui-droppable ui-state-highlight')

    })
})