describe('Navbar Navigation', () => {
    it('should navigate to Home page', () => {
      cy.visit("http://localhost:5173/")
      cy.get('a[href="/home"]').click()
      cy.url().should('include', '/home')
    })
  
    it('should navigate to Articles page', () => {
      cy.visit("http://localhost:5173/")
      cy.get('a[href="/articles"]').click()
      cy.url().should('include', '/articles')
    })
  
    it('should navigate to Matches page', () => {
      cy.visit("http://localhost:5173/")
      cy.get('a[href="/matches"]').click()
      cy.url().should('include', '/matches')
    })
  
    it('should navigate to Teams page', () => {
      cy.visit("http://localhost:5173/")
      cy.get('a[href="/teams"]').click()
      cy.url().should('include', '/teams')
    })
  })
  