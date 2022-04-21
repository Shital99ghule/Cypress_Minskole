class Contact{
    link='[id="contact-us"]'
    firstName='input[ name="first_name"]'
    lastName='input[ name="last_name"]'
    email='input[ name="email"]'
    message='textarea[ name="message"]'
    thankyou='#contact_reply >h1'
    visitSite(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
    }
    submitClick(){
        cy.get('input[type="submit"]').click()
    }
}
export default Contact