describe('verify the functionality for table',()=>{

    // cypress commands are asyn - 

    // cypress execution sync : interally promises resolved

    // javascript jquery syn nature will break
    
    // . then manuall resolve , to maintain the synch order


    it('verify the functionality for table',()=>{
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('#t01').should('be.visible').then(function(){
                console.log("hello")
            })
    })


    it('verify the functionality for login',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')

    
    })

    it('verify the functionality for login-2 cutmosised cypress command',()=>{
        cy.login('Admin','admin123')
    
    })

    it.only('verify the sum of values of table',()=>{

        cy.validateTable(1,159)
        cy.validateTable(2,163)

    
    
    })



})

