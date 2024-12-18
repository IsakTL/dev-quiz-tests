import Quiz from "../../client/src/components/Quiz";
// import React from "react";

describe('<Quiz />', () => {

    // Ensure Quiz component mounts
    it('renders the quiz component', () => {
        cy.mount(<Quiz />)
    }),

    // Test initial state of app
    it('renders the initial page for the quiz', () => {
        cy.mount(<Quiz />)
        cy.get('button').should('have.text', 'Start Quiz')
    })
})