//El cucumberOutline lo que hace es poder meterlo los parámetros que queramos a través del propio feature.

require('cypress-plugin-tab')
import "cypress-file-upload"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

Given('Primer paso de la prueba', () => {
    cy.visit("https://demoqa.com/automation-practice-form")
})

When('Segundo paso de la prueba {word}', (example) => {
    cy.get("#firstName").type(example).tab().type(example).tab().type(example)
})

When('Tercer paso de la prueba', () => {
    cy.get("#gender-radio-1").check({ force: true })
})

And('Concatenacion por si lo necesitamos {word}', (example2) => {
    cy.get("#userNumber").type(example2)
})

Then('finalizacion de la prueba', () => {
    let img = "imagen.jpg"
    cy.get("#uploadPicture").attachFile(img) 
    cy.get("#submit").click({ force: true })
})
