class structureBuilding{

    BulidArray(element,passArr,passIndexNumer,passCityYer){
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get(element).each((el,index)=>{
            if(el.text()==passArr[index]){
                cy.get('table[class="tsc_table_s13"]>tbody>tr').eq(index).find('td').eq(passIndexNumer).then((el)=>{
expect(el.text()).to.eq(passCityYer[index])
                })
            }
        })

    }
}
export default structureBuilding