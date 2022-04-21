describe("Iframe With Plugin,without iframe plugin",()=>{
    it.skip("without using pluging  or jquery iframe",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.get('iframe[id="mce_0_ifr"]').then(($ifrmel)=>{
        let ifrmelem=$ifrmel.contents().find('body')
        cy.wrap(ifrmelem).as('ifele')
        cy.get('@ifele').find('p').should('be.visible').and('have.text','Your content goes here.')
    })
})

it.skip('using plugin content iframe',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('iframe[id="mce_0_ifr"]')
    cy.iframe().find('p').should('be.visible').and('have.text','Your content goes here.')
})

it.skip('2nd example without using plugin',()=>{
    cy.visit('https://demoqa.com/frames')
    cy.get('iframe[id="frame2"]').then(($ifrm)=>{
        let ifrmele=$ifrm.contents().find('body')
        cy.wrap(ifrmele).as('ifrmelement')
        cy.get('@ifrmelement').find('h1').should('be.visible').and('have.text','This is a sample page')
        // <h1 id="sampleHeading">This is a sample page</h1>
    })
})
it.skip("2nd example with iframe plugin",()=>{
    cy.visit('https://demoqa.com/frames')
    cy.frameLoaded('#frame2')
    cy.iframe('#frame2').find('h1').should('be.visible').and('have.text','This is a sample page')

})

it.skip('3rd example without iframe plugin',()=>{
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/')//script error
    cy.get('iframe[id="google_esf"]').then(($ifrmel)=>{
        let ifrmele=$ifrmel.contents().find('body')
        cy.wrap(ifrmele).as('ifrme')
        cy.get('@ifrme').find('img[alt="GlobalSQA"]').shoul('be.visible')
    })
})
it.skip("3rd example with iframe plugin",()=>{
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/') //script error
    cy.frameLoaded('#google_esf')
    cy.iframe('#google_esf').find('img[alt="GlobalSQA"]').should('be.visible')
})

it.only('4th example without  imframe plugin',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('iframe[id="courses-iframe"]').then(($ifrm)=>{
        let frameEle=$ifrm.contents().find('body')
        cy.wrap(frameEle).as('ifrmEle')
        cy.get('@ifrmEle').find('a[href="#/consulting"]').eq(1).click({force:true})
        .should('have.text','Job Support')
    })
})

it.skip('4th examlpe with iframe plugin',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe('#courses-iframe').find('a[href="#/consulting"]').eq(1).click({force:true})
    .should('have.text','Job Support')
})




})