describe('TeamAndSportList Component', () => {
    it('should display sports dropdown', () => {
      cy.visit("http://localhost:5173/teams")
      cy.get('select').eq(0).should('exist')
    })
  
    it('should display teams dropdown after selecting a sport', () => {
      cy.visit("http://localhost:5173/teams")
      cy.get('select').eq(0).select(1)
      cy.get('select').eq(1).should('exist')
    })
  
    it('should display articles after selecting a team', () => {
      cy.visit("http://localhost:5173/teams")
      cy.get('select').eq(0).select(1)
      cy.get('select').eq(1).select(1)
      cy.get('div').contains('Articles of your favourite team').should('exist')
    })
  })
  