describe('handle the PUT and DELETE request', () => {
    it('PUT Upadete the data', () => {
        cy.request('PUT', 'https://reqres.in/api/users/5', {
            "Email": "shital123@gmail.com",
            "Name": "Shital",
            "Job": "Automation Tester"
        }).then(responce => {
            cy.log(responce)
            let body1 = responce.body
            expect(body1).to.have.property('Email', "shital123@gmail.com")
            expect(body1).to.have.property('Name', "Shital")
            expect(body1).to.have.property('Job', "Automation Tester")
            expect(responce.status).to.eq(200)

        })
    })
})