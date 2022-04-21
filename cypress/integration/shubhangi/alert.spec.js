describe(" Handling Alert", () => {
  
    it("TC_01 Handling Normal Alert", () => {
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   cy.get('input[id="name"]').type("minskole");
   cy.get('input[id="alertbtn"]').click()
   cy.on("window:alert",(text)=>{
       expect(text).to.equals('Hello minskole, share this practice page and share your knowledge')
       expect(text).to.includes('minskole')
   })
    })
    it("TC-2 alerts OK",()=>{
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('button[class="btn btn-danger"]').click()
         cy.on("window:alert",(text)=>{
             expect(text).to.equals('I am an alert box!')
         })
    })
   it("TC-3, confirm alerts in cypress",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('input[id="name"]').type("minskole");
    cy.get('input[id="confirmbtn"]').click()
    cy.on("window:confirm",(text)=>{
         cy.log(text)
         expect(text).to.includes("minskole")
         return true;    // clicks on OK
        // return false;   // clicks on cancel button
    })
   })
   it("TC-4 confirm alert",()=>{
       cy.visit('http://demo.automationtesting.in/Alerts.html')
       
       cy.get('button[class="btn btn-primary"]').click({force:true})
       cy.on('window:confirm',(text)=>{
           cy.log(text)
          
           return true
           //expect(text).to.eql('You pressed Ok')
       })
      // cy.get('#demo').should('contain','You pressed Ok')
   })
   it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
   
    cy.window().then(($win)=>{
        cy.stub($win,'prompt').returns('This is a test text')
        cy.contains('Click for JS Prompt').click()
    })
    cy.get('#result').should('contain','You entered: This is a test text')
})

})