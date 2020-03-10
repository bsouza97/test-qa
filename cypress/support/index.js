import './commands'

beforeEach('Login into system', () => {
    const email = 'bruno.souza.ps1@townsq.com.br'
    const password = 'bruno123'

    cy.visit('/')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click()
})

after('Clear all books', () => {
    cy.contains('Reservas', {timeout: 20000}).click()
    cy.contains('Minhas reservas').click()
    cy.get('img[alt="Remover"]').each(($el) => {
        cy
        .wrap($el)
        .invoke('attr', 'style', 'visibility: visible').click()
        cy.contains('Sim').click()
    })
})
