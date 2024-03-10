describe("Our first cypress test", () => {
    it("Visits home URL and ensures <h1> is correct", () => {
      cy.visit('/');
      cy.get('h1').should('contain', 'Rick and Morty');
    });
  });
  