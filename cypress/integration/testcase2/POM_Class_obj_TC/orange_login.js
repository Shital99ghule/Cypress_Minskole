import OrngLogin from "../../../POM/orange_hrm";
let orngLogin=new OrngLogin()
describe('OrangeHRM login crediential',()=>{
    it('valid credientaial',()=>{
       orngLogin.siteVisit()
        cy.get(orngLogin.username).type('Admin')
        cy.get(orngLogin.password).type('admin123')
       orngLogin.LoginClick()
       cy.get('img').should('be.visible')
    })
})