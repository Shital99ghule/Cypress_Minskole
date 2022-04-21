describe('Handle the DELETE request',()=>{
    it('DELETE request',()=>{
cy.request("DELETE",'https://reqres.in/api/users/5').then((response)=>{
    cy.log(response)
    expect(response.status).to.eq(204)
    expect(response.statusText).to.eq('No Content')
    expect(response.body).to.empty

})
    })
})