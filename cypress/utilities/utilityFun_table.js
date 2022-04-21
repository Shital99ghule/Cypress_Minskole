class UtilityTable{
    invokeTextStructure(el,index,expectedText){
        cy.get(el).eq(index).then((el,ind)=>{
            expect(el.text()).eq(expectedText)

        })


    }


    invokeTextAssertIncludes(el,index,expectedText){
        cy.get(el).eq(index).then((el,ind)=>{
            expect(el.text()).includes(expectedText)
        })
    }
}
export default UtilityTable