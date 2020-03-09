describe('Book a dependencie', () => {
    it('book a dependencie on Espaço Gourmet', () => {
        const description = 'test description 123'
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        let today = new Date()
        const month = String(today.getMonth())
        today = String(today.getDate())
        const day = today <= 9 ? '0' + today : today
        
        cy.contains('Reservas', {timeout: 15000}).click()
        cy.contains('Dependências').click()
        cy.get('div[class="info-title"]', {timeout: 15000}).contains('Espaço Gourmet').click()
        cy.get('div[class="day-number busy-day"]', {timeout: 15000}).contains(`${today}`).click()
        cy.get('button').contains('16:00 - 22:00').click()
        cy.get('textarea[id="event-description"]').focus().type(description, {force: true})
        cy.get('button').contains('Reservar').click()
        cy.get('div').contains('Você já reservou esse horário! :)').should('be.visible')
        cy.get('div').contains('A reserva foi criada com sucesso!').should('be.visible')
        cy.get('button').contains('16:00 - 22:00').click()

        cy.get('textarea[id="event-description"]').should('have.value', 'test description 123')
        cy.get('div[id="event-date"]').then(($date) => {
            expect($date).to.have.text(`${day} de ${months[month]}`)
        })
        cy.get('div[id="event-hour"]').then(($hour) => {
            expect($hour).to.have.text('16:00 - 22:00')
        })

        cy.get('#cancel-button').first().click()
    })
})