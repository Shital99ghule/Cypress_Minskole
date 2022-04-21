describe('All traversing method',()=>{
it('children(),eq(),first()-->',()=>{
cy.visit('https://www.kesari.in/Group-Tours')
cy.get('nav[id="main-menu"] >ul').children().should('have.length',11)
cy.get('nav[id="main-menu"] >ul').children('li').eq(0).should('contain','Tours')
// cy.get('nav[id="main-menu"] >ul').children('li').first().should('contain','Speciality Tours')
cy.get('nav[id="main-menu"] >ul').children('li').first().then(el=>{
    let element=el.text()

    cy.wrap(element)
    cy.log(element)
   
})


})
it.skip('last()',()=>{

})
it.skip('closest()-->it give the closest like your 1st parent paraent element from given element',()=>{
    cy.visit('https://www.kesari.in/Speciality-Tours')
    cy.get('ul[class="footer-links list-unstyled mb-0 row"]').first().closest('div').should('have.class','panel-content')
    cy.get(' h4[class="panel-title"]').eq(0).closest('div').should('have.class','panel')
})

// it.only('filter()->',()=>{
//     cy.visit('https://www.kesari.in/Speciality-Toursul[class="menu list-unstyled mb-0"]')
//     cy.get('ul[class="menu list-unstyled mb-0"]').children().filter().eq(6).then(el=>{
//         let ele1=el.text()
//         cy.wrap(ele1)
//         cy.log(ele1)
//     })
// })

it.skip('filter()->Get the DOM elements that match a specific selector. ',()=>{
        cy.visit('https://www.kesari.in/Speciality-Toursul[class="menu list-unstyled mb-0"]')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().filter('.megamenu-menu.tailor-made').should('have.length',1)
    })

    it.skip('find()',()=>{
        cy.visit('https://www.kesari.in/Group-Tours')
cy.get('div[class="col-sm-7 footer-indian-tour"]').find('h4').should('contain','Indian Tours :')
})

it.skip('first()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul').children('li').first().should('contain','Andaman')
})

it.skip('last()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul').children('li').last().should('contain','West Bengal')
})

it.skip('filter()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul>li').should('have.length',22)
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul>li').filter('li').should('have.length',22)
})

it.skip('next()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul>li').first().next('li').should('contain','Andhra Pradesh')
})
it.skip('nextAll()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    cy.get('div[class="col-sm-7 footer-indian-tour"]>ul>li').first().nextAll('li').should('have.length',21)
})
it.only('nextUntil()',()=>{
    cy.visit('https://www.kesari.in/Group-Tours')
    // cy.get('div[class="col-sm-7 footer-indian-tour"]>ul>li').eq(1).nextUntil('a[href="/India-Tours/Goa-Tours"]').should('have.length',3)
    cy.get('ul[class="menu list-unstyled mb-0"]>li').eq(2).nextUntil('a[href="/visa"]').should('have.length',5)

})




})




// obj.click('a[ui-sref="group({})"]')
//         obj.verifyUrl('/Group-Tours')
//         obj.clickMe('a[href="/Speciality-Tours"]', 0)
//         obj.verifyUrl('/Speciality-Tours')
//         obj.clickMe('a[href="/Speciality-Tours/Low-Price-Tours"]', 0)
//         obj.verifyUrl('/Speciality-Tours/Low-Price-Tours')
//         obj.clickMe('a[href="/Tailor-Made"]', 0)
//         obj.verifyUrl('/Tailor-Made')
//         //cy.get('a[href="http://www.kesarimice.in"]').first().invoke('removeAttr','target').click({force:true})
//         //obj.verifyUrl('http://www.kesarimice.in/')
//         obj.clickMe('a[href="/kesari-forex"]', 0)
//         obj.verifyUrl('/kesari-forex')
//         obj.click('a[href="/visa"]')
//         obj.verifyUrl('/visa')
//         obj.clickMe('a[href="/cruises"]', 0)
//         obj.verifyUrl('/cruises')
//         obj.clickMe('a[href="/Deals"]', 0)
//         obj.verifyUrl('/Deals')
//         obj.clickMe('a[href="/Deals"]', 1)
//         obj.verifyUrl('/Deals')
//         obj.clickMe('a[href="/About-Us"]', 0)
//         obj.verifyUrl('/About-Us')



