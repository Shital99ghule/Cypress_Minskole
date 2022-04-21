describe('mock the api response', () => {
    it('mock naveen', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts', {
            name: 'aayush',
            surName: 'Pawar'
        }).as('postData')
        cy.get('table a[href="/posts"]').last().click()
        cy.wait('@postData').then(Response => {
            cy.log(Response)
            expect(Response.response.body.name).to.eq('aayush')



        })
    })
    it('mock the response to avail a single book in library an kvalidate the messege', () => {


        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
            }
        ).as('getBooks')
        cy.get('button[routerlink="/library"]').click()
        cy.wait('@getBooks').then(response=>{
            cy.log(response)
            cy.get('body app-root p').should('have.text','Oops only 1 Book available')
            cy.get('.table tbody tr').should('have.length',response.response.body.length)
        })
    })
    it.only('mock the update comment', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        let message = 'whoa, this comment does not exist'
        cy.intercept({
            method: 'PUT',
            url: '*/comments/',
        }, {
            statusCode: 404,
            body: { error: message },
          
        }).as('putComment')
        cy.get('.network-put').click()

        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain', message)
    })
    it('amazon search', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('input#twotabsearchtextbox').type('shampoo')
        cy.get('div.s-suggestion').each((el,index)=>{
            let eltext = el.text()
            cy.log(eltext)
            if(eltext == 'shampoo for men'){
                cy.log(eltext)
                console.log(eltext)
                cy.wrap(el).click()
            }
        })
    })
   
})