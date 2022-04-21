class utilitiesFunction {
    visitUrl(url) {
        cy.visit(url)
    }
    veryfyText(el,expectedText) {
        cy.get(el).should('have.text',expectedText)
    }

verifyLength(el,expectedlength){
    cy.get(el).should('have.length',expectedlength)
}
verifyIndexText(el,index,expectedText){
    cy.get(el).eq(index).should('have.text',expectedText)
}
veryfExplicitText(element,expectedText){
    cy.get(element).then(el=>{
expect(el.text()).to.eqls(expectedText)
    })

}

veryfExplicitText(ele,index,expectedText){
    cy.get(ele).each().then((el,index)=>{
        expect(el.text()).to.eqls(expectedText)
    })
}

containsText(el,textContents){
    cy.get(el).should('contains',textContents)
}
containsIndexText(el,index,expectedText){
    cy.get(el).eq(index).should('contains',expectedText)
}
includeText(el,expectedText){
    cy.get(el).should('include',expectedText)
}
urlverify(expectedURL){
cy.url().should('equls',expectedURL)
}

verifyTitle(expectedtitle){
    cy.title().should('have.text',expectedtitle)
}
containsText(text){
    cy.contains(text)
}

}
export default utilitiesFunction

























// class assertFunc{
//     visitApp(urlHere){
//         cy.visit(urlHere)
//     }
//  verifytext(element,expextedText){
//      cy.get(element).should('have.text',expextedText);
//  }
//  verifyIndextext(element,index,expextedText){
//     cy.get(element).eq(index).should('have.text',expextedText);
// }
//  verifyLength(element,expextedLength){
//     cy.get(element).should('have.length',expextedLength);
// }
// verifyExplicitText(element,expextedText){
//     cy.get(element).then(el=>{
//         expect(el.text()).to.equals(expextedText)
//     })
// }
// verifyExplicitText(element,index,expextedText){
//     cy.get(element).each((el,index)=>{
//         expect(el.text()).to.equals(expextedText)
//     })
// }
// containsText(element,textContents){
//     cy.get(element).should('contains',textContents);
// }
// containsIndexText(element,index,textContents){
//     cy.get(element).eq(index).should('contains',textContents);
// }
// includesText(element,index,textContents){
//     cy.get(element).should('includes',textContents);
// }
// urlVerify(expectedUrl){
//     cy.url().should('equals',expectedUrl)
// }
// verifyTitle(expectedTitle){
// cy.title().should('have.text',expectedTitle)
// }
// verifyTextContains(text){
//     cy.contains(text)
// }
// }
//  export default assertFunc;