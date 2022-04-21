describe('Learn Screen shot', () => {

    beforeEach(() => {
        cy.visit('https://www.flipkart.com/')
    })
    it.skip('test case 1- screenshot', () => {
        cy.screenshot('flipcart') //flipcart is file name

    })
    it.skip('test case -2 cliping', () => {
        cy.screenshot({ clip: { x: 50, y: 60, width: 500, height: 500 } })
    })

    it.skip('test case -3 for specific element',()=>{
        cy.get('svg[class="V3C5bO"]').screenshot('add_cart')//add_cart is a file name ,which you can give any
    })


})