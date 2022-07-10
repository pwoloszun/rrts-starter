describe('Landing Page spec', () => {

  it('should render title on landing page', () => {
    cy.visit('/');
    cy.findByRole('banner').within(() => {
      cy.findByText(/rrts-starter/i);
    });
  });

  it('should navigate to Counter Page on Counter link click', () => {
    cy.visit('/');
    cy.findByRole('navigation').within(() => {
      cy.findByText(/Counter/i)
        .click();

      cy.location('pathname').should('equal', '/my-counter');
    });
  });

  it('should increment current value on "Add Amount" click', () => {
    cy.visit('/my-counter');

    cy.findByRole('main').within(() => {
      cy.findByRole('heading', { name: /Current Value/i })
        .should('contain.text', '0');

      cy.findByRole('button', { name: /Add Amount/i })
        .click();

      cy.findByRole('heading', { name: /Current Value/i })
        .should('contain.text', '2');

      cy.findByRole('button', { name: /Add Async/i })
        .click();

      cy.findByRole('heading', { name: /Current Value/i })
        .should('contain.text', '4');
    });
  });

});
