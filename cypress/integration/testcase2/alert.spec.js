
describe("Handling box",()=>{
it.skip('alert boox',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[id="name"]').type('shital')
    cy.get('input[id="alertbtn"]').click()
    cy.on("window:alert",(text)=>{
expect(text).eql("Hello shital, share this practice page and share your knowledge")
expect(text).include("shital")
    })

})

it.skip("testcase 2 alert with OK",()=>{
cy.visit('http://demo.automationtesting.in/Alerts.html')
cy.get('button[class="btn btn-danger"]').click({force:true})
cy.on("window:alert",(text)=>{
   // cy.log(text)
    return true
})
})





it.skip("Test case 3 for confirm alert",()=>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('input[id="name"]').type("Bhagwat")
cy.get('input[id="confirmbtn"]').click()
cy.on("window:confirm",(text)=>{
    //  cy.log(text)
    expect(text).to.includes("Bhagwat")
  
    return true;    // clicks on OK
   // return false; // clicks on cancel button
})



    })


    it.only("test case 4 confirm alert",()=>{
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get('button[class="btn btn-primary"]').click({force:true})
        cy.on("window:confirm",(text)=>{
            //cy.log(text)
            // expect(text).to.includes("Press a Button !")
            return true
        })
    })


})