it('write file', () => {
    cy.writeFile('my_file.text', "my friend name is priya \n")
    cy.writeFile('my_file.text', "she is nice girl \n", { flag: 'a+' })
    cy.writeFile('my_file.text', 'we want a job as soon asposible \n', { flag: 'a+' })
    cy.writeFile('my_file.text', 'Is it possible? \n', { flag: 'a+' })
    cy.writeFile('my_file.text', 'Yes...........Is it 100% possible? ', { flag: 'a+' })

})

it('write a json format data in fixture file',()=>{
    cy.writeFile('cypress\\fixtures\\example.json',{

        name:'shital',
        gmail:"ghuleshital2005@gmail.com",
        city:"sangamner"

    })

})


it('read file',()=>{
    cy.readFile('my_file.text').then(text=>{
        expect(text).to.include('priya')
    })
})

it('read a json file data from fixture folder',()=>{
    cy.fixture('example').then(data=>{
        cy.log(data)
        cy.log(data.name)
        expect(data.city).to.equals('sangamner')
        // it works like asynchronus
    })
})