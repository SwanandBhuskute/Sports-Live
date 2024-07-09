describe('ArticleList Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/home');
  });

  it('should display loading state initially', () => {
    cy.contains('Loading...').should('exist');
  });

  it('should display the list of articles', () => {
    cy.contains('Loading...').should('not.exist');
    cy.get('div.bg-white').should('have.length.at.least', 1);
  });

  it('should open and close the article modal', () => {
    cy.contains('Loading...').should('not.exist');
    cy.get('button').contains('Read more').first().click();
    cy.get('div.fixed').should('be.visible');
    cy.get('button').contains('Close').click();
    cy.get('div.fixed').should('not.be.visible');
  });
  
});
