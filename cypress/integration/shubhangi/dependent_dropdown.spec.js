describe("Mouse Actions",()=>{
it('dependant dropdown', () =>{
    cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/');
//   cy.get('select[id="country"]').select('India').then(()=>{
//       cy.get('select[id="state"]').select('Maharashtra').then(()=>{
//           cy.get('select[id="city"]').select('Pune')
//       })
//   })
cy.get('select[id="country"]').select('India')
cy.get('select[id="state"]').select('Maharashtra')
cy.get('select[id="city"]').select('Pune')
})

})