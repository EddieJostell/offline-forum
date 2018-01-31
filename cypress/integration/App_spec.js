import { closeSync } from "fs";

describe("App.js", () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit("http://localhost:3000");
  });
  context("Creating Post(s)", () => {
    it("should count posts", () => {
      cy.get('[data-type="post"]').should("have.length", 3);
    });
    it("should make a post", () => {
      cy.get('[data-type="post"]').should("have.length", 3);
      cy.get('[name="title"]').type("Hello World", { delay: 100 });
      cy.get('[name="content"]').type("Funka plx", { delay: 100 });
      cy.get('[value="Create"]').click({});
      cy.get('[data-type="post"]').should("have.length", 4);
    });
  });

  context("Creating Comments on Post(s)", () => {
    it("should count comments", () => {
      cy.get('[data-type="comment"]').should("have.length", 3);
    });

    it("should make a comment", () => {
      cy.get('[data-type="comment"]').should("have.length", 3);
      cy.get(".block").select("Zac");
      cy
        .get(":nth-child(2) > div.py-2 > .container > #comment")
        .type("Such good post much WOW!", { delay: 100 });

      cy
        .get(":nth-child(2) > :nth-child(2) > .container > .bg-indigo-dark")
        .click();
      cy.get('[data-type="comment"]').should("have.length", 4);
    });

    context(
      'Make two comments on two seperate posts by two seperate "people"',
      () => {
        it("should do as said in the context ", () => {
          cy.get('[data-type="comment"]').should("have.length", 3);
          cy.get(".block").select("Zac", { delay: 100 });
          cy
            .get(":nth-child(2) > div.py-2 > .container > #comment")
            .type("I am Zac and I approve of this post!!", { delay: 100 });
          cy
            .get(":nth-child(2) > :nth-child(2) > .container > .bg-indigo-dark")
            .click();
          cy.get(".block").select("Esmeralda", { delay: 100 });
          cy
            .get(":nth-child(3) > div.py-2 > .container > #comment")
            .type("I am Esmeralda and I approve of this post!!", {
              delay: 100
            });
          cy
            .get(":nth-child(3) > :nth-child(2) > .container > .bg-indigo-dark")
            .click();
        });

        it("should make avatars remove their posts", () => {
          cy.get(".block").select("Esmeralda", { delay: 100 });
          cy.get(".bg-red-dark").click();
          cy.get(".block").select("Zac", { delay: 100 });
          cy.get(".bg-red-dark").click();
          cy.get(".block").select("Morgana", { delay: 100 });
          cy.get(".bg-red-dark").click();
          cy.wait(1000);
        });
      }
    );
    context("Talking to real human?", () => {
      it("should send message to human bot :^)", () => {
        cy.get(".pin-l").click();
        cy.get("form.mx-auto > .shadow").type("Are you real?", { delay: 50 });
        cy.get("form.mx-auto > .bg-indigo-dark").click();
        cy.contains("Are you real?");
        cy.get(".h-64 > .bg-white", { timeout: 15000 });
        cy
          .get(".h-64")
          .children()
          .should("have.length", 2);
      });
    });
  });
});
