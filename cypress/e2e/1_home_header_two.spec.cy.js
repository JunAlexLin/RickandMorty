describe("Home Page Header 2 Content Verification", () => {
    it("Visits home URL and ensures <h2> is correct", () => {
      cy.visit('/');
      cy.get('h2').should('contain','Welcome to the Multiverse of Rick and Morty!');
    });
  });
  

describe("Navbar Verification", () => {
  it("Ensures Links in navbar work", () => {
      cy.visit('/')
      cy.get("nav").should("exist")
      cy.get("nav>div>a").should('contain','HOME');
      cy.get("nav>div>a").eq(3).should('contain','FAVORITE CHARACTERS');
  });
});

describe("Links Works",() => {
  it("Link to Character Page Works",() => {
    cy.visit('/')
    cy.get('nav>div>a').eq(2).should('have.attr','href','/characters').click()


    cy.location().should((location) => {
      expect(location.pathname).to.equal('/characters')
    })
  });
});