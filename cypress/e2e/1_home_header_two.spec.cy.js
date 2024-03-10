describe("Home Page Header 2 Content Verification", () => {
    it("Visits home URL and ensures <h2> is correct", () => {
      cy.visit('/');
      cy.get('h2').should('contain','Welcome to the Multiverse of Rick and Morty!');
    });
  });
  