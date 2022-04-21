describe('table validation',()=>{
    it('to validate the table column sum',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[href="Data-Table/index.html"]').invoke('removeAttr','target').click()
        let sum=0
        cy.get('#t02 >tbody').children('tr').each(function(el,index){
           // cy.wrap((el)).children().text()
           if(index !=0){
            //    cy.log(cy.wrap(el).children.last().text())
            sum= sum + Number(el.children().last().text())
           }

        }) .then(()=>{
            //cy.log(sum)
            expect(sum).to.equal(163)  

        })
    })
})