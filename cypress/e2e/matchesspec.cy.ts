describe('MatchList Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/matches'); 
    });
  
    it('should display loading state initially', () => {
      cy.contains('Loading...').should('exist');
    });
  
    it('should display the list of matches', () => {
      cy.contains('Loading...').should('not.exist');
      cy.get('div.bg-white').should('have.length.at.least', 1);
    });
  });
  
  