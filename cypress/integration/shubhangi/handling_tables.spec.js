
var company = [];
var contacts = [];

describe('handling web tables',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('invoke the name of the dat from table',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('table#customers tbody tr').each((row,index)=>{
            if(index != 0){
            cy.get('table#customers tbody tr').eq(index).find('td').eq(0).invoke('text').then(text=>{
               company.push(text)
              
            })
        }
        })
        cy.log(company)
    })
    it.skip('tables contact data',()=>{
    cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
    cy.get('table#customers tbody tr').each((row,index)=>{
        if(index != 0){
        cy.get('table#customers tbody tr').eq(index).find('td').eq(1).then(el=>{
           contacts.push(el.text())
          
        })
    }
    })
    cy.log(contacts)
})
it('assert respective countires has gicen companies only',()=>{
    cy.log(company)
    cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
    var countrie = ['','Germany','Mexico','Austria','UK','Canada','Italy'];
    cy.get('table#customers tbody tr').each((row,index)=>{
        if(index != 0){
        cy.get('table#customers tbody tr').eq(index).find('td').last().then((el,index)=>{
           if(el.text() == countrie[index]){
           
                cy.get('table#customers tbody tr').eq(index).find('td').eq(0).invoke('text').then(text=>{
                   expect(text).to.eq(company[index -1])
                  
                })           }
          
        })
    }
    })
 
})
})