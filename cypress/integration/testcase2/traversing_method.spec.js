 ///<reference types="cypress" />
describe('All Traversing method',()=>{

    beforeEach(()=>{
        cy.visit('https://www.ebay.com/n/all-categories#ebay-motors');
        // cy.visit('/')
       })

it('1st traversing method is .children()',()=>{
    cy.get('ul[class="top-level-cats"]').children().should('have.length',11)
    cy.get('ul[class="top-level-cats"]').children('.active').should('have.length',1)
    cy.get('div[class="all-categories-left-nav-container sticky"]').children().should('have.length',2)
    // cy.get('div[class="all-categories-left-nav-container sticky"]').children()
    //      .should('have.length',2)

})

it.skip('2nd method .closest()',()=>{
    // cy.get('div[class="all-categories-left-nav-container sticky"]').closest('div').should('have.class','all-categories-left-nav-container sticky')
    cy.get('li.active').closest('ul').should('have.class','top-level-cats')

    cy.get('ul.top-level-cats').closest('div').should('have.class','all-categories-left-nav-container sticky')
// cy.wait(50000)
})
it('.contains() traversal',()=>{
    cy.contains('All Categorie')
    cy.contains('eBay Motors')
    
})
it('.filter() in traversal',()=>{
    // cy.get('ul[class="top-level-cats"]').find('li').filter('.active').should('have.length',1)
    cy.get('ul[id="gh-topl"]>li').filter('li[class="gh-t gh-divider-l"]')
         .should('have.length',3)
})

it('.find() in traversa',()=>{

    // cy.get('a[id="gh-la"]').find('img')
    cy.get('div[class="l1s-container"').eq(0).find('a[class="cat-url"]').eq(0)
    .should('have.text','Auto Parts & Accessories')
})
it('.first()',()=>{
cy.get('ul[class="top-level-cats"] > li').first('nav-l0.rover-tracking').then((el)=>{

    var elText = el.text()
    cy.log(elText)

})
})

it.skip('.last() in traversal',()=>{
    // cy.get('ul[class="l1s-container"] li').last()
cy.get('ul[class="l1s-container"] li').last('li[class="sub-cat-container"] >a ').then((el)=>{

    var elText = el.text()
    cy.log(elText)
})
})


it.skip('.nex() in tarversal  this method to help the find next DOM elemnt form front of current element',()=>{
cy.get('li[class="sub-cat-container"]').next()

})

it.skip('.nextall() in traversal This method helps to find the next all elemnt form frontof curent element',()=>{
cy.get('li[class="sub-cat-container').nextAll()

})

it('.nextUntil() in traversal',()=>{
    cy.get('ul[id="gh-eb"] li').nextUntil('.gh-eb-li gh-dd rt')
})

it(".prev() in traversal",()=>{
cy.get('div[id="home-and-garden"]').prev().should('have.id','ebay-motors')
})

it('.prevall() in traversal',()=>{
    cy.get('div[id="others"]').prevAll()
})

it('.prevUntill() in traversal',()=>{
    cy.get('div[id="collectibles-and-art"]').prevUntil('[id="health-and-beauty"]')
})

it.only('.not("selstor") in traversal',()=>{
    cy.get('div[id="sporting-goods"]').not('[id="cat-container"]')
})

it('sibling() in traversal',()=>{
    cy.get('div[id="electronics"]').siblings()
})

})
