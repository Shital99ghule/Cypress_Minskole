describe("Button All action",()=>{
    // beforeEach(()=>{
    //     cy.visit('')
    // })
    it.skip("1st testcase for dblclick()",()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id="doubleClickBtn"]').dblclick()
        cy.get('p[id="doubleClickMessage"]').should('be.visible').and('have.text','You have done a double click')
    })
    it.skip('2st testcase forrightclick()',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id="rightClickBtn"]').rightclick()
        cy.get('p[id="rightClickMessage"]').should('be.visible').and('have.text','You have done a right click')
    })
    it.skip('3st testcase for click',()=>{ //not run
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id="M6DdW"]').click({force:true})
        cy.get('p[id="dynamicClickMessage"]').should('be.visible').and('have.text','You have done a dynamic click')
    })




    it('test to text input and text area',()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id="userName"]').type('shital')
        cy.get('input[id="userEmail"]').type("ghuleshital2005@gmail.com")
        cy.get('textarea[id="currentAddress"]').type('Airoli,navi Mumbai')
        cy.get('textarea[id="permanentAddress"]').type('Sangamner')
        cy.get('button[id="submit"]').click()
        cy.get('p[id="name"]').then((el)=>{
            var name=el.text()
            cy.log(name)
            expect(name).to.include("shital")
        })

        cy.get('p[id="email"]').then((el)=>{
            var email=el.text()
            cy.log(email)
            expect(email).to.include('ghuleshital2005@gmail.com')
        })
        cy.get('p[id="currentAddress"]').then((el)=>{
            var cuadd=el.text()
            cy.log(cuadd)
            expect(cuadd).to.include('Airoli,navi Mumbai')
        })
        cy.get('p[id="permanentAddress"]').then((el)=>{
            var peradd=el.text()
            cy.log(peradd)
            expect(peradd).to.include('Sangamner')
        })
    })

})