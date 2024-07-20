describe('Signup Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/signup');
    });
  
    it('displays the signup form', () => {
      cy.get('form').should('exist');
      cy.get('input[name="userName"]').should('exist');
      cy.get('input[name="userEmail"]').should('exist');
      cy.get('input[name="userPassword"]').should('exist');
      cy.get('button[type="submit"]').should('exist');
    });
  
    it('allows a user to input their name, email, and password', () => {
      cy.get('input[name="userName"]').type('John Doe').should('have.value', 'John Doe');
      cy.get('input[name="userEmail"]').type('john@example.com').should('have.value', 'john@example.com');
      cy.get('input[name="userPassword"]').type('password123').should('have.value', 'password123');
    });
  
    it('includes a link to sign in and home', () => {
      cy.get('a[href="/signin"]').should('exist').and('contain.text', 'Sign in here');
      cy.get('a[href="/home"]').should('exist').and('contain.text', 'Home');
    });
  });
  