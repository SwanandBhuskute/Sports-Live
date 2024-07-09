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
  
    it('should filter matches by sport', () => {
      cy.contains('Loading...').should('not.exist');
      cy.get('button').contains('Rugby').click(); 
      cy.get('div.bg-white').each((match) => {
        cy.wrap(match).contains('Rugby');
      });
    });
  });
  
  