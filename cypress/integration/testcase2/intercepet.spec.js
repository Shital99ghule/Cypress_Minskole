//const { get } = require("cypress/types/lodash")

describe('Intercept',()=>{
    it('Validate api response with UI',()=>{
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.intercept('https://jsonplaceholder.cypress.io/comments/1').as('getcommet')
    cy.get('button[class="network-btn btn btn-primary"]').click()
    cy.wait('@getcommet').then(Objresponse=>{
        cy.log(Objresponse.response.body.body)
        let btnText=Objresponse.response.body.body
        cy.get('div[class="network-comment"]').should('have.text',btnText)

    })
})
    it('Validate the API with UI',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/api')
        cy.request('GET','https://kitchen.applitools.com/api/recipes').then(getResponse=>{
            cy.log(getResponse)
            let getLength=Cypress.$('ul[role="list"]>li').length
            cy.log(getLength)
            expect(getLength).to.eq(getResponse.body.data.length)
            cy.get('h4[class="chakra-heading css-1hm1kf2"]').first().should('have.text',getResponse.body.data[0].title)
            cy.get('ul[role="list"]>li').eq(0).find('img').should('have.attr','src',getResponse.body.data[0].image)
        })
    })

it.only('Validate the API with UI',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/api')
    cy.request('GET','https://kitchen.applitools.com/api/recipes').then(getResponse=>{
cy.log(getResponse) 
let getLength=Cypress.$('ul[role="list"]>li').length
cy.log(getLength)
cy.log(getResponse.body.data.length)
 expect(getLength).to.eq(getResponse.body.data.length)
 cy.get('h4[class="chakra-heading css-1hm1kf2"]').each((el,index)=>{
     cy.log(el.text())
     cy.get('h4[class="chakra-heading css-1hm1kf2"]').eq(index).should('have.text',getResponse.body.data[index].title)
 }) 

cy.get('ul[role="list"]>li').each((el,index)=>{
    cy.log(el.text())
    cy.get('ul[role="list"]>li').eq(index).find('img').should('have.attr','src',getResponse.body.data[index].image)
})

})    
})
    
})