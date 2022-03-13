/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Rendering app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000")
  })

  it("displays the cards fetched", () => {
    cy.get("#main-content #content #card").should("have.length", 10)

    cy.get("#main-content #content #card article h2")
      .first()
      .should("have.text", "Chivito uruguayo")
    cy.get("#main-content #content #card article h2")
      .last()
      .should("have.text", "Seri muka kuih")
  })

  it("Search an recipe and render th results", () => {
    cy.get('input[type="text"]').type("cheese")
    cy.get("#main-content #content #card").should("have.length", 8)

    cy.get("#main-content #content #card article h2")
      .first()
      .should("have.text", "Cream Cheese Tart")
    cy.get("#main-content #content #card article h2")
      .last()
      .should("have.text", "Fruit and Cream Cheese Breakfast Pastries")
  })

  it("Open & close the favorites menu", () => {
    cy.get(".fa-book").click()
    cy.get(".veil").should("have.length", 1)
    cy.get(".veil").click()
    cy.get(".veil").should("have.length", 0)
  })
})
