import { closeSync } from "fs";

describe("App.js", () => {
  context("Creating Post(s)", () => {
    beforeEach(() => {
      localStorage.clear();
      cy.visit("http://localhost:3000");
    });
    it("should count posts", () => {
      cy.get('[data-type="post"]').should("have.length", 3);
    });
    it("should make a post", () => {
      cy.get('[data-type="post"]').should("have.length", 3);
      cy.get('[name="title"]').type("Hello World", { delay: 200 });
      cy.get('[name="content"]').type("Funka plx", { delay: 200 });
      cy.get('[value="Create"]').click({});
      cy.get('[data-type="post"]').should("have.length", 4);
    });
  });

  context("Creating Comments on Post(s)", () => {
    beforeEach(() => {
      localStorage.clear();
      cy.visit("http://localhost:3000");
    });
   
    it("should count comments", () => {
      cy.get('[data-type="comment"]').should("have.length", 3);
    });

    it("should make a comment", () => {
      cy.get('[data-type="comment"]').should("have.length", 3);
      cy.get(".block").select("Zac");
      cy
        .get(":nth-child(2) > div.py-2 > .container > #comment")
        .type("Such good post much WOW!", { delay: 200 });

      cy
        .get(":nth-child(2) > :nth-child(2) > .container > .bg-indigo-dark")
        .click();
      cy.get('[data-type="comment"]').should("have.length", 4);
    });

    context(
      'Make two comments on two seperate posts by two seperate "people"',
      () => {
        beforeEach(() => {
          cy.visit("http://localhost:3000");
        });

        it("should do as said in the context ", () => {
          cy.get('[data-type="comment"]').should("have.length", 3);
          cy.get(".block").select("Zac", { delay: 200 });
          cy
            .get(":nth-child(2) > div.py-2 > .container > #comment")
            .type("I am Zac and I approve of this post!!", { delay: 200 });
          cy
            .get(
              ":nth-child(2) > :nth-child(2) > .container > .bg-indigo-dark"
            )
            .click();
            cy.get(".block").select("Esmeralda", { delay: 200 });
            cy
              .get(
                ":nth-child(3) > div.py-2 > .container > #comment"
              )
              .type("I am Esmeralda and I approve of this post!!", {
                delay: 200
              });
              cy
                .get(
                  ":nth-child(3) > :nth-child(2) > .container > .bg-indigo-dark"
                )
                .click();
        });

         
                it("should make avatars remove their posts", () => {
                   cy
                     .get(".block")
                     .select("Esmeralda", { delay: 200 });
                  cy.get(".bg-red-dark").click();
                  cy
                    .get(".block")
                    .select("Zac", { delay: 200 });
                  cy.get(".bg-red-dark").click();
                  cy
                    .get(".block")
                    .select("Morgana", { delay: 200 });
                     cy.get(".bg-red-dark").click();
                });

      }
    );
  });
});
