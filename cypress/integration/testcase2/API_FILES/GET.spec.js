describe('validate the request API',()=>{
    it('GET all list ',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then(response=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.isOkStatusCode).to.eq(true)
            expect(response.statusText).to.eq('OK')
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0]).to.have.property('first_name','Michael')
            expect(response.body.data[0]).to.have.property('id',7)
            expect(response.headers).to.have.property('connection','keep-alive')

        })

    })


    it.only('to another way to to GET the API',()=>{
        cy.request({
            method:'GET',
            url:'https://kitchen.applitools.com/ingredients/api',
       headers:{
         accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
      }

            
        }).then(response=>{
            cy.log(response)
             let getData=response.body
             cy.log(getData)
            //  expect(getData).have.property('status',200)
           expect(response.status).to.eq(200)
           let headers=response.headers
           expect(headers).to.have.property('content-encoding', "gzip")
    
           let requestHeaders=response.requestHeaders
           expect(requestHeaders).to.have.property('Connection', "keep-alive")

        })
    })
})