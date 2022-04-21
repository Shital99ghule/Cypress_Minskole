import UtilityTable from "../../utilities/utilityFun_table"
import structureBuilding from "../../POM/Project1/utilityMethod"

var uitiliiObj= new UtilityTable()
var structureObj=new structureBuilding()
var structureName=['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
var structureCity=['Dubai','Mecca','Taipei','Shanghai']
var structureCountry=['UAE','Saudi Arabia','Taiwan','China']
var structureRank=['1','2','3','4']
describe('handling web tables',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it('verify the structure building and theire rank',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        // cy.get('table[class="tsc_table_s13"]').find('tbody >tr').find('th').should('have.length',4)
        cy.get('table[class="tsc_table_s13"]>tbody>tr>th').should('have.length',4)
        cy.get('table[class="tsc_table_s13"]>tbody>tr>th').each((el,index)=>{
            //cy.log(el.text()) 
            expect(el.text()).to.eq(structureName[index])
        })

    })


    it('vrify the structure of the buldinkg and their cities',()=>{
        var structureName=['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
        structureObj.BulidArray('table[class="tsc_table_s13"]>tbody>tr>th',structureName,1,structureCity)

    })

    it('vrify the structure of the buldinkg and their country',()=>{
        var structureName=['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
        structureObj.BulidArray('table[class="tsc_table_s13"]>tbody>tr>th',structureName,0,structureCountry)

    })

    it.only('vrify the structure of the buldinkg and their Rank',()=>{
        var structureName=['Burj Khalifa','Clock Tower Hotel','Taipei 101','Financial Center']
        structureObj.BulidArray('table[class="tsc_table_s13"]>tbody>tr>th',structureName,4,structureRank)

    })
})