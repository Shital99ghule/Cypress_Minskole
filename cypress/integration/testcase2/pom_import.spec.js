import priya from "../../POM/pom";
let obj=new priya()
describe('POM demo using class and object',()=>{
it('',()=>{
obj.visitApp()
cy.get(obj.flipkart_img).should('be.visible')
obj.loginClick()


})

})