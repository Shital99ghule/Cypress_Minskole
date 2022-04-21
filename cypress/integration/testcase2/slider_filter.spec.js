describe('slider range', () => {
    // beforeEach.skip(() => {
    //     cy.visit('http://practice.automationtesting.in/shop/')
    // })
    it.skip('slider range', () => {
        cy.get('div.price_slider_wrapper span.ui-slider-handle').last().invoke('attr', 'style', 'left: 94.8571%')
        cy.get('span.price').children().not('del').each(el => {
            let price1 = el.text().replace('₹', '').replace('.00', '')
            expect(Number(price1)).to.within(150, 500)

        })

    })
    it.skip('',()=>{
        cy.get('ul[class="product-categories"] > li >a').each(el=>{
            var bookname=el.text()
            cy.log(bookname)
            if(bookname === 'Android'){
                cy.wrap(el).click()
            }
        })

        var bkname= bookname.toLowerCase()
        cy.url().should('include',bkname)

    })

// it.only('',()=>{
//     cy.visit('https://www.mercari.com/')
//     cy.get('input[type="search"]').click()
//     cy.get('div[data-testid="SearchesGreyPills"] >ul').children().each((el,index)=>{

//         var valid_cli=el.text()
//         cy.log(valid_cli)
       
//     }).then(()=>{
//         expect(valid_cli).to.equal(el).click()
//     })
// })

})