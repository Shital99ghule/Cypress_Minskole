describe('intercept',()=>{
    
       
  
    it('validate api response with UI', ()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as('getcomment')
           cy.get('button.network-btn').click()
           cy.wait('@getcomment').then(Response=>{
            cy.log(Response)
               cy.log(Response.response.body.body)
               let getBtnText = Response.response.body.body
               cy.get('div.network-comment').should('have.text',getBtnText)
           })
        
        
          
 
    })
    it('validate api response with UI', ()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/api')
        cy.request('https://kitchen.applitools.com/api/recipes').then(response=>{
            cy.log(response)
           
            let uiLen = Cypress.$('ul#recipes-list li').length
            cy.log(uiLen)  // 5
            cy.log(response.body.data.length)  //5
            expect(uiLen).to.eq(response.body.data.length)
            cy.get('h4.chakra-heading').first().should('have.text',response.body.data[0].title)
            cy.get('ul#recipes-list li').eq(0).find('img')
            .should('have.attr','src',response.body.data[0].image)
        })
    })
    it('validate api response with UI', ()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/api')
        cy.request('https://kitchen.applitools.com/api/recipes').then(response=>{
            cy.log(response)
           
            let uiLen = Cypress.$('ul#recipes-list li').length
            cy.log(uiLen)  // 5
            cy.log(response.body.data.length)  //5
            expect(uiLen).to.eq(response.body.data.length)
            cy.get('h4.chakra-heading').each((el,index)=>{
                cy.get('h4.chakra-heading').eq(index).should('have.text',response.body.data[index].title)
            })
            
            cy.get('ul#recipes-list li').each((el,indx)=>{
                cy.get('ul#recipes-list li').eq(indx).find('img')
                .should('have.attr','src',response.body.data[indx].image)
            })
        
        })
    })
})