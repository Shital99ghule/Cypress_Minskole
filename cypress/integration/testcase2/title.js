describe('title ',()=>{
    it.skip('fetch the title from site',()=>{
        // cy.visit('https://www.flipkart.com/')
        // cy.title().should('include','')
        cy.visit('https://kingofsilver.com/')
       cy.title().should('equals','Buy 925 Silver Jewelry | Sterling Silver Jewelry | King of Silver')
    })

    it.skip('fetch the title from site',()=>{
    
       cy.title().should('have.text','Buy 925 Silver Jewelry | Sterling Silver Jewelry | King of Silver')
    })

    it.skip('test case for reload',()=>{
        cy.visit('https://www.w3schools.com/jsref/event_createevent.asp')
        cy.reload()
    })
    // it.only('test case for reload',()=>{
    //     cy.visit('https://kingofsilver.com/')
    //     cy.pause()
    // })

    it.only('test-case go',()=>{
        cy.visit('https://www.flipkart.com/')
        // cy.get('div[class="xtXmba"]').eq(1).click()
        cy.contains('Furniture').click()
        cy.go('-1') //yo can write cy.go or cy.go(-1)
        cy.go('forward')//or cy.go(1)
    })

})
