//const { xorBy } = require("cypress/types/lodash")

describe('POST to create a user data', () => {
    it('POST request', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            //  cy.request('POST','https://webdriveruniversity.com/Contact-Us.html',{
            "name": "shital",
            "lastname": 'Automation Tester'
        }).then(response => {
            cy.log(response)
            let body = response.body
            expect(body).to.have.property('name', "shital")
            //expect(response.body.data).to.length(1)
            let headers = response.headers
            expect(headers).to.have.property('content-length', '98')
        })
    })

    it.only('POST request to another way', () => {
        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            body: {
                name: 'Amol',
                job: 'forest_employee',

            },
            headers: {
                content_type: "application/json"
            }
        }).then(response => {
            cy.log(response)
            let body = response.body
            expect(body).to.have.property('job', 'forest_employee')
            expect(body).to.have.property('name', 'Amol')
            expect(body).to.have.property('id')

            expect(response.status).to.eq(201)

        })
    })



})