describe('To handle the pagination',()=>{
it('',()=>{
    cy.visit('https://examples.bootstrap-table.com/template.html?v=134&url=options%2Ftable-pagination.html')
    function findItem(findId){
        function findPage(index){
            var found=false
            cy.get('li.page-item:not(.page-pre):not(.page-next)').as('pages')
            cy.get('@pages').eq(index).click()
            //cy.get('@pages').eq(index).click()
            cy.get('#table > tbody > tr >td:nth-child(1)').each(item=>{
                var itemtxt=item.text()
                if(itemtxt == findId){
                    found=true
                    expect(Number(itemtxt)).to.eql(findId)
                    return false
                }
            }).then(()=>{
                if(!found){
                    findPage(++index)
                }
            })
        }
        findPage(0)

    }
    findItem(12)
})
})