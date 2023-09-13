/// <reference types="Cypress" />

describe('Presentation 2 assignment', () => {
  it(' to make sure the departure date is set to be todays date +1', () => {
    cy.visit('https://www.almosafer.com/en');
    cy.get('.cta__saudi').click();
    cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').invoke('text').then((webDay) => {
      const websiteDay = webDay
      const currentDay = new Date();
      const expectedDay = new Date(currentDay);
      expectedDay.setDate(currentDay.getDate() + 1);
      expect(websiteDay).to.equal(expectedDay.toDateString().split(' ')[2] + " ");
    });
  });

  it('to make sure the return date is set to be todays date +2', () => {
    cy.visit('https://www.almosafer.com/en');
    cy.get('.cta__saudi').click();
    cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt').invoke('text').then((webDay) => {
      const websiteDay = webDay
      const currentDay = new Date();
      const expectedDay = new Date(currentDay);
      expectedDay.setDate(currentDay.getDate() + 2);
      expect(websiteDay).to.equal(expectedDay.toDateString().split(' ')[2]);
    });
  });
  it('check if the class is economy by defult', () => {
    cy.visit('https://www.almosafer.com/en');
    cy.get('.cta__saudi').click();
    cy.get('.sc-jWxkHr').invoke('text').should('include', 'Economy');
  })
});
