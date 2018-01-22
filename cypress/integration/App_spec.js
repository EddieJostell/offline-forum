describe('Making a post', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should count posts', () => {
    cy.get('[data-type="post"]').should('have.length', 3);
  })
  it('should make a post', () => {
    cy.get('[data-type="post"]').should('have.length', 3);
    cy.get('[name="title"]').type("Hello World", {delay: 50});
    cy.get('[name="content"]').type("Funka plx", {delay: 50});
    cy.get('[value="Create"]').click();
    cy.get('[data-type="post"]').should('have.length', 4);    
  })
});