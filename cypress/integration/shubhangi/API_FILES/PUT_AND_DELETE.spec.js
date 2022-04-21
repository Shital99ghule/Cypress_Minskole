/// <reference types = "Cypress"/>


describe('validate reqress Api', () => {

    it('PUT- update the expected perticular user', ()=>{
        cy.request('PUT','https://reqres.in/api/users/5',{
            
            "email": "minskole@reqres.in",
            "first_name": "aayush",
            "last_name": "pawar",
            
        }).then(response=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('first_name','aayush')
            expect(response.body).to.have.property('last_name','pawar')
            expect(response.body).to.have.property('email','minskole@reqres.in')
        })
    })
    it('DELETE- DELETE the expected perticular user', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/5').then(response=>{
            cy.log(response)
            expect(response.status).to.eq(204)
            expect(response.statusText).to.eq("No Content")
            expect(response.body).to.empty
        })
    })
})