// class DropDwon{
//     seletct1='select[id="dropdowm-menu-1"]'
//     seletct2='select[id="dropdowm-menu-2"]'
//     seletct3='select[id="dropdowm-menu-3"]'
 
//     DropDwonVisit(){
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         // cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target')
//     }
    

// }
// export default DropDwon;



// class Checkboxes{
// option1='input[value="option-1"]'
// option2='input[value="option-2"]'
// option3='input[value="option-3"]'
// option4='input[value="option-4"]'


//  CheckboxVisit(){
//         cy.visit('https://webdriveruniversity.com/')
//          cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()
//     }

// }
// export default Checkboxes;


// class radioButtons{
//     input1='input[value="green"]'
//     input2='input[value="blue"]'
//     input3='input[value="yellow"]'
//     input4='input[value="orange"]'
//     input5='input[value="purple"]'
//     radioVisit(){
//         cy.visit('https://webdriveruniversity.com/')
//           cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()

//     }
// }


// export default radioButtons


class Disabled{
input1='input[value="lettuce"]'
input2='input[value="cabbage"]'
input3='input[value="pumpkin"]'
select='select[id="fruit-selects"]'
option='option[value="orange"]'

    disabledVisit(){
                cy.visit('https://webdriveruniversity.com/')
                  cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr','target').click()
        
            }
}

export default Disabled