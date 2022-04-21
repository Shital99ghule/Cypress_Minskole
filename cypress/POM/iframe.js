class iframe{
    iframe_ele='iframe[id="frame"]'
    body='body'
    p_ele='p[class="section-title"]'
    iframeVisit(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('a[href="IFrame/index.html"]').invoke('removeAttr','target').click()
    }

}
export default iframe