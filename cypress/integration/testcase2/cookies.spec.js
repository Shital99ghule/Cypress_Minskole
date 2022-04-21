var cookies=['protein','vegetable']
describe('cookies',()=>{
    beforeEach(()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/cookie')
    })
    it('Get all cookei',()=>{
        cy.getCookies().then(allCookies=>{
            cy.log(allCookies)

        })

    })
        it('TC-2->again Get the Al cookies way-->2',()=>{
cy.getCookies().should('have.length',2)
            cy.getCookies().then(getAllcookies=>{
                expect(getAllcookies[0]).to.have.property('value','chicken')
                expect(getAllcookies[1]).to.have.property('value',"broccoli")

            })
        })


        it('TC-3 Get all cookie and compare with the expected result',()=>{
            cy.getCookies().should('have.length',2)
            cy.getCookies().each((currentCookies,index)=>{
expect(currentCookies).to.have.property('name',cookies[index])
            })
        })

        it('TC-4  delete/clear single cookie',()=>{
cy.clearCookie('protein').should('be.null')
cy.clearCookie('vegetable').should('be.null')
        })


        it('TC-5 delete/clear for All cookies',()=>{
            cy.clearCookies()
            cy.getCookies().should('be.empty')
        })

        it('TC-6 modify the existing cookie',()=>{
            cy.clearCookie('vegetable').then(updateCookie=>{
                cy.setCookie('vegetable','bringle')
                .should('have.property','value','bringle')

            })
        })

        it('Tc--7 set a new cookie',()=>{
            cy.setCookie('fruit','Apple').should('have.property','value','Apple')
        })

        it('TC-8 clear the localStorage',()=>{
            
        })


    })
