describe('Book a dependencie', () => {
    it('book a dependencie on Espaço Gourmet', () => {  
        cy.wait(26000)
        cy.contains('Reservas').click()
    })
})