// const { describe } = require("mocha")

describe('learn traversing method', () => {
    it.skip('tc 1 eq()--->To get a DOM element at a specific index, use the .eq() command', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').eq(0).should('have.text', 'Firstname')
    })

    it.skip('TC-2 To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text', 'Firstname')
        cy.get('th').should('have.length', 12)
    })


    it.skip('Tc -3 To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.attr', 'scope', 'row')
    })


    it.skip('Tc -4 To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-drinks-list"]').children().eq(0).should('have.text', 'Coffee')
        cy.get('ul[class="traversal-drinks-list"]').children('li').should('have.length', 5)

    })
    it.skip('Tc -5 To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#coffee').next().should('have.text', 'Tea')
        cy.get('ul[class="traversal-drinks-list"] >li').eq(0).next().should('have.text', 'Tea')


    })
    it.skip('Tc -6 nextall() --To get all of the next sibling DOM elements within elements, use the .nextAll() command. ', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').nextAll().should('have.length', 2)
        cy.get('#veggie').nextAll('li').should('have.length', 4)
    })
    it.skip('TC-7 ', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    it.skip('TC-8 prev()- To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    it.skip('TC-9 prevAll() To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
    })


    it.skip('TC 10->sibling()-To get all sibling DOM elements of elements, use the .siblings() command. ', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().should('have.length', 10)
    })

    it.skip('TC 11->filter()-To get DOM elements that match a specific selector, use the .filter() command. ', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('nav[aria-label="breadcrumb"]>ol >li').filter('.active').should('have.text', 'Contact Us')
    })

})


//16-march ---->new traversing method's
// describe('Verify the traverse methods',()=>{
//     it.skip('To get DOM element at a specific index,use the .eq() command',function(){
//         cy.visit('https://kingofsilver.com/');
//         cy.get('.nav.navbar-nav > li').as('navElement')
//         //cy.get('.nav-pills).children().eq(1).should('contain','Apparel & accessories')
//         //cy.get('nav-pills').children().first().should('contain','Home')
//         cy.get('@navElement').children().should('have.length',8)
//         cy.get('@navElement').children().eq(1).then(el=>{
//         let texte_ele=el.text()
//        cy.log(texte_ele)
//         })

//     })
//     it.skip('sibling method()',()=>{
//         cy.visit('https://kingofsilver.com/')
// cy.get('div[class="col-md-4 col-sm-4 item"]').siblings().should('have.length',3)
//     })

//     it.skip('.first()',()=>{
//         cy.visit('https://kingofsilver.com/')
//         cy.get('li[class="li-color"]').first().should('have.text','Condition of Use & Return')
//     })

//     it.skip('.last()',()=>{
//         cy.visit('https://kingofsilver.com/')
//         cy.get('li[class="li-color"]').last('li[class="li-color"] >span>a').children().should('have.length',1)
//     })
// it.only('filter()',()=>{
//     cy.visit('https://katalon.com/')
//     cy.get('div[id="hs_menu_wrapper_footer_product_menu"] > ul >li').filter().should('contain','Katalon TestCloud')
// })
// })