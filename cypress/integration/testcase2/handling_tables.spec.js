
var company = []
var contacts = []
var number = []
describe('handling Web tables', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    // beforeEach(() => {
    //     // cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
    //     // cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
    //     cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

    // })
    it.skip('invoke the name of data from table', () => {
        // cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        cy.get('table[id="customers"]>tbody>tr').each((el, index) => {
            if (index != 0) {
                cy.get('table[id="customers"]>tbody>tr').eq(index).find('td').eq(0).invoke('text').then(text => {
                    company.push(text)
                })
            }

        })


        cy.log(company)

    })
    it.skip('invoke the contact data', () => {
        // cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        cy.get('table[id="customers"]>tbody>tr').each((el, index) => {
            if (index != 0) {
                cy.get('table[id="customers"]>tbody>tr').eq(index).find('td').eq(1).then(el => {
                    contacts.push(el.text())
                })

            }
        })

        cy.log(contacts)
    })


    it.skip('assert respective countires has gicen companies only', () => {
        cy.log(company)
        var countries = ['', 'Germany', 'Mexico', 'Austria', 'UK', 'Canada', 'Italy'];
        cy.get('table[id="customers"]>tbody>tr').each((el, index) => {
            if (index != 0) {
                cy.get('table[id="customers"]>tbody>tr').eq(index).find('td').last().then(el => {
                    if (el.text() === countries[index]) {
                        // expect(el).to.eq(countries[index-1])
                        cy.get('table[id="customers"]>tbody>tr').eq(index).find('td').eq(0).invoke('text').then(text => {
                            expect(text).to.eq(company[index - 1])
                        })
                    }
                })
            }
        })
    })




    // it.only('the sum of table column ', () => {
    //     var sum = 0
    //     cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
    //     // cy.get('table[class="table batsman"]>tbody').first().children('tr').should('have.length',19)
    //     cy.get('table[class="table batsman"]>tbody').first().find('tr').each((el,index) => {
    //         //cy.log(cy.wrap(el).children('td').eq(index).text())
    //             //cy.log(cy.wrap(el).children().last().text())
    //       //sum= sum + Number(el.first().eq(2).text())
    //       cy.log(el.eq(2).text())
    //     })
    // })
    it('sum of table', () => {
        var sum = 0
        cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
        cy.get('table[class="table batsman"]').first().find('tr td:nth-child(3)').as('table_list')
        cy.get('@table_list').each((el, index) => {
            if (index < 10) {
                cy.log(el.text())
                sum += Number(el.text())
            }
            //cy.log(sum)
        }).then(()=>{
            expect(sum).to.eq(84)
        })
    })

it.only('sum of second table',()=>{
    var sum=0
    cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
    cy.get('table[class="table batsman"]').last().find('tbody tr').find('td:nth-child(3)').as('table_listTwo')
    cy.get('@table_listTwo').each((el,index)=>{
        if(index < 5){
          //  cy.log(el.text())
sum += Number(el.text())
        }
        //cy.log(sum)
    }).then(()=>{
        expect(sum).to.eq(85)
    })
})

})