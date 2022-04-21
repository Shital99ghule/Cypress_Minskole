it('write file', () => {
    cy.writeFile('file1.text', 'Hi this is Minskole\n')   //   \n is to start from new line
    cy.writeFile('file1.text', 'we are from Pune\n', { flag: 'a+' })
    cy.writeFile('file1.text', ' We are learning cypress', { flag: 'a+' })
    // 'a+'  is append which will apend ur new contents with old contents
})


it('write json test data in fixture file', () => {
    cy.writeFile('cypress/fixtures/example.json',
        {
            name: "Minskole",
            email: "test@minskole.com",
            password: "test@123",

        })
})

it('read  file', () => {
    cy.readFile('file1.text').then(data => {
        expect(data).to.includes('Hi this is Minskole')
    })
})
it('write json test data in fixture file', () => {
    cy.fixture('example').then((data)=>{
        cy.log(data)
        cy.log(data.name)
        expect(data.name).to.equals('Minskole')
        expect(data.password).to.equals('test@123')
  
    })
})