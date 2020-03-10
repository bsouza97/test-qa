import { getCurrentDay, getCurrentMonthName } from '../../support/utils' 

describe('Book a dependencie', () => {
    it('book a dependencie on Espaço Gourmet', () => {
        const description = 'test description 123'
        const day = getCurrentDay(new Date())
        const month = getCurrentMonthName(new Date())
        const today = day <= 9 ? day.replace('0', '') : day
        
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
        cy.get('div[id="event-date"]').then((date) => {
            expect(date).to.have.text(`${day} de ${months[month]}`)
        })
        cy.get('div[id="event-hour"]').then((hour) => {
            expect(hour).to.have.text('16:00 - 22:00')
        })

        cy.get('#cancel-button').first().click()
    })
})