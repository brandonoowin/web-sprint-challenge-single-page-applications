describe('Bloomtech Pizza Parlor Ordering App', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#pizza-button').click()
    cy.get('#name-input').type('Brandon')
    cy.get('#pepperoni').check()
    cy.get('#sausage').check()
    cy.get('#ham').check()
    cy.get('#steak').check()
    cy.get('#special-text').type('Insert Special Instructions here')
    cy.get('#order-button').click()
    
  })
})