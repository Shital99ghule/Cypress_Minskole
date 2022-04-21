class Action{
drag='div[id="draggable"]'
drop='div[id="droppable"]'

    actionVisit(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[ href="Actions/index.html"]').invoke('removeAttr','target').click()
    }
}

export default Action