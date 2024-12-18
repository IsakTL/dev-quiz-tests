describe('End-to-end quiz', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000');
    });

    it('should display the first question to the user when they click the "Start Quiz" button', () => {
        // cy.visit('http://localhost:3000');
        cy.contains('Start Quiz').click();

        const displayCard = cy.get('.p-4').first().children();
        displayCard.should('have.length',2)
    })
})