// <reference types="cypress" /> (że niby dzięki temu pojawia się code autocompletion)

// some practice sites:
// http://example.com/
// UDEMY: https://books.toscrape.com/
// UDEMY: http://zero.webappsecurity.com/login.html
// SDET 2022: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

// cy.wait: implicit wait (optional) - if we want to wait more than default cypress waiting time to move on to the next test (next it)
it("should wait for 3 seconds", () => {
    cy.wait(3000)
  })
  
// cy.pause: pauses the execution of the test until the resume button is clicked
it("should pause the execution", () => {
    cy.pause()
})

// cy.log: logs a text when a test is done:
it("should log a text", () => {
    cy.visit("https://books.toscrape.com/")
    cy.log("Page visited")
})

// cy.reload(): reloads the page:
it("should reload the page", () => {
    cy.visit("https://books.toscrape.com/")
    cy.log("Before reload")
    cy.reload()
    cy.log("After reload")
})