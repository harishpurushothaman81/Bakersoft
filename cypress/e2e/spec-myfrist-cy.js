describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.title().should('eq','My Site Title')
    })
  })