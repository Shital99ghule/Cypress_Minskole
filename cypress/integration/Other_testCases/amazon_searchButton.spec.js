describe('Dynamic search button',()=>{
    it('search button',()=>{
        cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hmh5l8jr5_e&adgrpid=61764313147&hvpone=&hvptwo=&hvadid=486381533661&hvpos=&hvnetw=g&hvrand=14844226031647149460&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303196&hvtargid=kwd-327061083&hydadcr=14455_2154377&gclid=CjwKCAjw0a-SBhBkEiwApljU0l8pXO6zYxzNwikUHjT8wowa6GvkZVQhMLeE2zzElaCPp5yqupCtfRoCvngQAvD_BwE')
        cy.get('#twotabsearchtextbox').type('tedd')
        cy.get('.autocomplete-results-container>div>div[class="s-suggestion-container"]').each((el,index)=>{
            let elText=el.text()
            cy.log(elText)
           // cy.log(el.text())
            if(elText =='teddy bear'){
                cy.log(elText)
                cy.wrap(el).click()
               
            }
        }).then(()=>{
            cy.get('.a-color-state').should('contain','teddy bear')
        })
    })
})