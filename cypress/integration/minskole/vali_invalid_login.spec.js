// TS_01
//validate  the login functionality

// TC_01
//check  login with valid credentials
//check login with invalid credentials

describe('validate  the login functionality',function(){

    it.only('check login with invalid credentials',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        // Assertion
        cy.get('span[id="spanMessage"]').should('have.text',"Invalid credentials")



    })
    it('check login with valid credentails',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        // asset any thing on dashbord

    })

    it.only('check login function for zoomin',function(){
        cy.visit('https://www.zoomin.com/sign-up?%2F')
        cy.get('input[name="name"]').type('chinmay010')
        cy.get('input[name="email"]').type('chinmay7nov@gmail.com')
        cy.get('input[class="number-input"]').type("7709192442")
        cy.get('input[name="password"]').type('@Chinmay123')
        cy.contains('SIGN UP').click()
        cy.get('a[href="/sign-up?%2F"]').should('be.visible')
    })


})

// understanding partOne
// describe('validate  the login functionality',()=>{

// })

// let person = {
//     firstName:"chinmay",
//     age:23,
//     display:function(){
//         console.log('hello')
//     }

// }

// person.firstName
// person.display()

// Understanding part-2 

// css selector -->

// <h1 class = "one" id="two" name ="nm">Heading<h1>

// tagName 

//cy.get('h1')

// class 

//cy.get('.one')

// id 

//cy.get('#two')

// common formula 

// tagName[attribute="value "]

// h1[name="nm"]

// text 

//cy.contains('Heading')


//<input name="txtUsername" id="txtUsername" type="text">

// cy.get('#txtUsername')
// cy.get(input[name="txtUsername])