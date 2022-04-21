it.only("tc3: GO ",()=>{
    cy.visit('https://www.amazon.in/')
    cy.get('img[alt="Electricity bill"]').click()
   cy.go('back')     //yo can write cy.go or cy.go(-1)
   cy.go('forward')   //or cy.go(1)
})

it("tc4: Reload",()=>{
    cy.visit('https://www.amazon.in/')
    cy.reload()
})

//cy.log(`--------------------------------------`)



class minskole {

electricityBill = 'img[alt="Electricity bill"]' ;
visitApp(){
   cy.visit('https://www.amazon.in/')
}

visitWithParameters(url,newUrl){
   cy.visit(url)
   cy.get(this.electricityBill).click()
   cy.url().should('includes',newUrl)
}

}
export default minskole;

//cy.log('----------------------------------------')




import minskole from "../pom/homepage"
let myObj = new minskole();

describe('pom',()=>{

it("pom demo",()=>{
   myObj.visitApp()
   cy.get(myObj.electricityBill)
})

it("with Parameters",()=>{
 myObj.visitWithParameters('https://www.amazon.in/',"electricity")

})

})