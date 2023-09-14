/// <reference types="Cypress" />

    describe('Presentation 2 assignment',()=>{
      it(' to make sure the departure date is set to be todays date +1 and the return date is set to be todays date +2', () => {
        cy.visit('https://www.almosafer.com/en');
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').invoke('text').then((expectedDayWebsite) => {
            const currentDay = new Date();
            const currentDayy = parseInt(currentDay.toDateString().split(' ')[2]) ;
            const currentMonth = currentDay.toDateString().split(' ')[1] ;
            
            let monthsWebsite = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' , 'January' ]
            
            if (currentDayy > 29) {
              cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').should ('eq' , 1)
              cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt').should ('eq' , 2)

              cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt')
              .invoke('text')
              .then((text) => {
              cy.log (text)
              const localMonthIndex = new Date().getMonth(); 
              expect(currentMonth).to.eq((monthsWebsite[(localMonthIndex + 1) % 12]).slice(0, 3) || (monthsWebsite[(localMonthIndex - 1) % 12]).slice(0, 4) );
              });


            } else {
              const nextDay = currentDayy + 1;
              const aftertwodays = currentDayy + 2;
            
              cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt')
                .invoke('text')
                .should('eq', nextDay.toString() + " "); // Compare to the next day as a string
            
              cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt')
                .invoke('text')
                .should('eq', aftertwodays.toString());
            
              cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-fvLVrH')
                .invoke('text')
                .then((text) => {
                  const firstThreeCharacter = text.slice(0, 3);
                  const firstFourCharacter = text.slice(0, 4);

                  expect(firstThreeCharacter || firstFourCharacter ).to.eq(currentDay.toDateString().split(' ')[1]);
                });
            }
        });
    });

    it('check if the class is economy by defult',()=>{
      cy.visit('https://www.almosafer.com/en');
      cy.get('.cta__saudi').click();
      cy.get('.sc-jWxkHr').invoke('text').should('include','Economy');
    })
    });  

