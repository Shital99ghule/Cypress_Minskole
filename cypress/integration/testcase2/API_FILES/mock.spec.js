describe('learn mock API', () => {
    it('Mock API', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
            name: 'Amol',
            surName: "Bhagwat"
        }).as('postData')

        cy.get('a[href="/posts"]').last().click()
        cy.wait('@postData').then(Response => {
            cy.log(Response)
            expect(Response.response.body.name).to.eq('Amol')
        })
    })

    it('Tc-2 mock the response to avail a single book in library an kvalidate the messege', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }]
        }
        ).as('getBooks')

        cy.get('button[data-target="#exampleModal"]').click()
        //cy.contains('Virtual Library').click()
        cy.get('@getBooks').then(Response => {
            cy.log(Response)
            cy.get('p').should('have.text', 'Oops only 1 Book available')
            cy.get('.table>tbody>tr').should('have.length', Response.response.body.length)
        })
    })
    it.only('mock the update comment', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        let Message = "who,this comment is not exist"
        cy.intercept({
            method: 'PUT',
            url: "https://jsonplaceholder.cypress.io/comments/1"
        },
            {
                statusCode: 404,
                body: { error: Message },

            }).as('putComment')
        cy.get('button[class="network-put btn btn-warning"]').click()
        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain', Message)
    })

})
// url:"https://jsonplaceholder.cypress.io/comments/1"