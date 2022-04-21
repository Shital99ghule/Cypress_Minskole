import iframe from "../../../POM/iframe";
var iframeobj= new iframe()
describe('iframe wit POM',()=>{
    it('iframe without using plugin',()=>{
    iframeobj.iframeVisit()
    cy.get(iframeobj.iframe_ele).then($elifrm=>{
        let eliframe=$elifrm.contents().find(iframeobj.body)
        cy.wrap(eliframe).as('frame')
        cy.get('@frame').find(iframeobj.p_ele).should('have.text','Who Are We?')
    })
})
})