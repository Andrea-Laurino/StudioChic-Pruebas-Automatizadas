Cypress.Commands.add("logIn", (selector, texto) => {
    cy.get(selector).type(texto);
});

Cypress.Commands.add("btn", (elementSelector) => {
    cy.get(elementSelector).click();
});

Cypress.Commands.add("beVisible", (selector) => {
    cy.get(selector).should("be.visible");
});

Cypress.Commands.add("verifyText", (selector, texto) => {
    cy.get(selector).should('have.text', texto);
});





