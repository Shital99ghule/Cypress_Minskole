describe("File handling for file upload and file download",()=>{
    it.skip('test case -1 for  single file upload using plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
       var myimg="aa.jpg"
        cy.get('input[id="file-upload"]').attachFile(myimg)
        cy.get('input[id="file-submit"]').click()
cy.get('div[id="uploaded-files"]').then(ele=>{
    var gettext=ele.text().trim()
    expect(gettext).to.eqls(myimg)
})
    })
it.skip('case 2 for multiple file upload using plugin',()=>{
    cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
    var multi_img=['aa.jpg','aa1.jpeg']
    cy.get('input[id="igUpload1_ibb_fp"]').attachFile(multi_img)
    cy.get('button[title="Upload"]').click()
    cy.get('#igUpload1_spbtncncl_lbl').should('have.text','Done')
    cy.get('#igUpload1_fc').children('div').should('have.length',multi_img.length)

    
})
it.skip('Downlod file',()=>{
// cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','download1.jpg')

 cy.downloadFile('https://commons.wikimedia.org/wiki/Main_Page#/media/File:Scarlet_darter_(Crocothemis_erythraea)_female_Bulgaria.jpg','cypress/fixtures/Download', 'download.jpg')

})

it.skip("Select file in cypress 9.3 version and above version",()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    let img1="cypress/fixtures/aa.jpg"
    cy.get('#file-upload').selectFile(img1)
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').then(el=>{
        var ele_text=el.text().trim()
        cy.wrap(ele_text)
        expect(ele_text).to.eqls('aa.jpg')
    })
})

    it.skip('Select multiple ',()=>{
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        var multi=['aa.jpg','aa1.jpeg']
        cy.get('input[type="file"]').attachFile(multi)
        cy.get('button[title="Upload"]').click()
        cy.get('#igUpload1_spbtncncl_lbl').should('have.text',"Done")
        cy.get('#igUpload1_fc').children('div').should('have.length',multi.length)
    })



//     it.only('TC for select multiple file usiln selectFile',()=>{
//         cy.visit('https://postimages.org/')
//         cy.get('#uploadFile').selectFile(
//             [
//                 'cypress/fixtures/aa1.jpeg',
//                 'cypress/fixtures/aa.jpg',

//         ],
//         {acion:'drag-drop'}
        
//         )
//         cy.get('.imagetitle').eq(0).should('have.text','aa')
//         cy.get('.imagetitle').eq(1).should('have.text','aa1')

//     })
// })
it.only('Multiple file upload using selectFile', () => {
    cy.visit('https://postimages.org/')
    cy.get('#uploadFile').selectFile(
        [
          'cypress/fixtures/aa.jpg',
          'cypress/fixtures/aa1.jpeg',
         
         
        ],
        {action: 'drag-drop'}
      )
     
      cy.contains('aa').should('be.visible')
      cy.contains('aa1').should('be.visible')

})
})


    




