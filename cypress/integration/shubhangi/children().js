describe('Traversing Methods',()=>{
    beforeEach(()=>{
        cy.visit('/');  //"baseUrl":"https://publichealth.harriscountytx.gov/Resources/2019-Novel-Coronavirus/COVID-19-Testing-Information",
      
        
    })
  
   
    it.skip('To get children of DOM elements, use the .children() command.',()=>{
          
       cy.get('ul[class="menu"]').children()
       cy.get('ul[class="menu"]').children().should('have.length', 7)
    })
   
})