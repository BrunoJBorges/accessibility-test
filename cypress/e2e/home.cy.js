describe('Testes de acessibilidade', () => {
    it('Home', () =>{
        cy.visit('https://db.tec.br/')
        cy.pageAccessibility()
    })

    it('Home - Link', () =>{
        cy.visit('https://db.tec.br/')
        cy.componentAccessibility('a[href="https://db.tec.br/cultura/"]')
    })
    
    it('Contato', () =>{
        cy.visit('https://db.tec.br/contato/')
        cy.pageAccessibility()
    })
})