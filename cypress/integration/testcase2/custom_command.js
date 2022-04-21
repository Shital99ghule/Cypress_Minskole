
// 'aayushpawar','Test@123'

// describe('creating custom commands',()=>{
//     beforeEach(()=>{
//         cy.visit('/');
//     })
  
//     it('use the custom command for login',()=>{
       
//     cy.login('Admin','adm123');
//     })
// })


describe("How to create a custom command",()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('1.with login',()=>{
        cy.login('Admin',"admin123")
    })
})
