describe('learn viewport in different mobile views',()=>{
    var multi_device=['ipad-2','ipad-mini','iphone-3','iphone-4']

    it.skip('test case 1 - preset--> iphone-3',()=>{
        cy.viewport('iphone-3')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 2 for ipad-mini',()=>{
        cy.viewport('ipad-mini')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 3 - iphone-3',()=>{
        cy.viewport('iphone-3')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 4 - iphone-4',()=>{
        cy.viewport('iphone-4')
        cy.visit('https://www.flipkart.com/')

    })
    it.skip('test case 5 - iphone-5',()=>{
        cy.viewport('iphone-5')
        cy.visit('https://www.flipkart.com/')

    })
    it.skip('test case 6 - iphone-6',()=>{
        cy.viewport('iphone-6')
        cy.visit('https://www.flipkart.com/')

    })
    it.skip('test case 7 - iphone-6+',()=>{
        cy.viewport('iphone-6+')
        cy.visit('https://www.flipkart.com/')

    })
    it.skip('test case 8 - iphone-7',()=>{
        cy.viewport('iphone-7')
        cy.visit('https://www.flipkart.com/')

    })
    it.skip('test case 9 - iphone-8',()=>{
        cy.viewport('iphone-8')
        cy.visit('https://www.flipkart.com/')
    })

    it.skip('test case 10 - iphone-x',()=>{
        cy.viewport('iphone-x')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 11 - iphone-xr',()=>{
        cy.viewport('iphone-xr')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 12 - macbook-11',()=>{
        cy.viewport('macbook-11')
        cy.visit('https://www.flipkart.com/')
    })

    it.skip('test case 13 - macbook-13',()=>{
        cy.viewport('macbook-13')
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 14 - macbook-15',()=>{
        cy.viewport('macbook-15')
        cy.visit('https://www.flipkart.com/')
    })

    it.skip('test case 15 - macbook-16',()=>{
        cy.viewport('macbook-16')
        cy.visit('https://www.flipkart.com/')
    })

    
    it.skip('test case 16 - samsung-note9',()=>{
        cy.viewport('samsung-note9')
        cy.visit('https://www.flipkart.com/')
    })

    it.skip('test case 16 - samsung-s10',()=>{
        cy.viewport('samsung-s10')
        cy.visit('https://www.flipkart.com/')
    })

it.only('take a multiple device in a variable',()=>{
  for (let i of multi_device){
      cy.viewport(i)
      cy.visit('https://kingofsilver.com/')
  }

})


})