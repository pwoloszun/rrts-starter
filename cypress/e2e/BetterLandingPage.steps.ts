import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit Home page", () => {
  cy.visit('/');
});

Then(`I should see {string} title within page header`, (title: string) => {
  cy.findByRole('banner').within(() => {
    cy.findByText(title);
  });
});
