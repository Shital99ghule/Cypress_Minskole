describe('pagination', () => {
    it('verify expected item in the pagination table', () => {
        cy.visit('https://examples.bootstrap-table.com/template.html?v=134&url=options%2Ftable-pagination.html')
        function findItem(itemId) {
            function findInpage(index) {
                var found = false;

                cy.get('li.page-item:not(.page-pre):not(.page-next)').as('pages')
                            
                cy.get('@pages').eq(index).click()
                        cy.get('#table tbody tr td:nth-child(1)').each(item => {
                            let itemText = item.text();


                            if (itemText == itemId) {
                                found = true
                                expect(Number(itemText)).to.eq(itemId)
                                return false;    //break

                            }
                        }).then(() => {
                            if (!found) {
                                findInpage(++index)
                            }
                        })

            }
            findInpage(0)

        }
        findItem(12)

    })
})
