// Storage Memory 

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

// Login

Cypress.Commands.add("login", (login) =>{
  login.locators.forEach((element, index) => {
    cy.get(`${element}`).type(`${login.content[index]}`);
  });
});

// Verify Href Content

Cypress.Commands.add("verifyHrefContent", (scope) => {
  scope.elementHref.forEach((element, index) => {
    cy.get(`[href="${element}"]`).should('contain', `${scope.content[index]}`);
  });
});

// Verify Generic Content

Cypress.Commands.add("verifyContent", (scope) => {
  scope.elementHref.forEach((element, index) => {
    cy.get(`${element}`).should('contain', `${scope.content[index]}`);
  });
});
