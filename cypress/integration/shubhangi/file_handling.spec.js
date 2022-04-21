/// <reference types="cypress" />
describe('file handlings in cypress',()=>{
    it.only('TC-1 single file upload using plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        var img = 'zoom.png'
        cy.get('#file-upload').attachFile(img)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains(img)
        .then(el=>{
            var elText = el.text().trim()
            expect(elText).to.eqls(img)
        })
    })
    it.only('upload multiple files with plugin', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let arr = ['zoom.png','teams.png']
        cy.get('input[type="file"]').attachFile(arr)
        cy.get('button[title="Upload"]').click()
        cy.get('#igUpload1_spbtncncl_lbl').should('have.text','Done')
        cy.get('#igUpload1_fc').children('div').should('have.length',arr.length)
        
    })
    it.only('downloadfile from browser', () => {
        //cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','download1.jpg')
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'cypress/fixtures/Download', 'xyz.txt')
    })
     it('select file in cypress 9.3 and above versions', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        let img = 'cypress/fixtures/teams.png'
        cy.get('#file-upload').selectFile(img)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files')
        .then(el=>{
            var elText = el.text().trim()
            expect(elText).to.eql('teams.png')
        })
    })
    it('Multiple file upload using selectFile', () => {
        cy.visit('https://postimages.org/')
        cy.get('#uploadFile').selectFile(
            [
              'cypress/fixtures/zoom.png',
              'cypress/fixtures/teams.png',
             
            ],
            {action: 'drag-drop'}
          )
         
          cy.get('.imagetitle').eq(0).should('have.text', 'teams')
          cy.get('.imagetitle').eq(1).should('have.text', 'zoom')
  
    })
})