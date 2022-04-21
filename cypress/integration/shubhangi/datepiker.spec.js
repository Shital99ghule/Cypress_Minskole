describe('Verify the date Picker functionality', () => {
   
    it.only('TC 02 Validate the datePicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 400)
        let year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        cy.log(year)
        cy.log(month)
        cy.log(da)
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.get('.col-xs-1').click()
        function SelectYearMonth() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()
                }
            })
            function SelectDate() {
                cy.get('.ui-state-default').contains(da).click({ force: true })
            }
            SelectDate()
        }
        SelectYearMonth()
    })
})







// class student {
//     constructor(name,age){
//         this.name = "Aayush";
//         this.age = 3
//     }
//     displayName(){
//         console.log('my name is :' ,this.name)
//     }
// }
// let obj = new student();
// console.log(obj.age);
// console.log(obj.name)
// obj.displayName()