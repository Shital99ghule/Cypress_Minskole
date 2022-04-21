class priya{
     flipkart_img='img[ class="_2xm1JU"]'
     visitApp(){
         cy.visit('https://www.flipkart.com/')
     }
     loginClick(){
         cy.get('a[href="/account/login?ret=/"]').click()
     }
}

export default priya ;