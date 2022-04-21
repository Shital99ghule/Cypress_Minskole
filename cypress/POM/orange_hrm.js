class OrngLogin{
    username='#txtUsername'
    password="#txtPassword"
    img='[href="http://www.orangehrm.com/"] > img'
    
    siteVisit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    LoginClick(){
        cy.get('#btnLogin').click()
    }

}

export default OrngLogin