describe('Testes de acessibilidade', () => {
    it('Home', () =>{
        cy.visit('https://www.correios.com.br/')
        cy.pageAccessibility()
    })

    it('Home - Link', () =>{
        cy.visit('https://www.correios.com.br/')
        cy.componentAccessibility('.bannerPrincipal')
    })
    
    it('Rastreamento', () =>{
        cy.visit('https://rastreamento.correios.com.br/app/index.php')
        cy.pageAccessibility()
    })
})