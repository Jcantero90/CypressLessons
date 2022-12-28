//Esto es un archivo cucumber básico. Está ligado al cucumber.feature

require('cypress-plugin-tab')
import "cypress-file-upload"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

let example = "Texto de ejemplo"

Given('Primer paso de la prueba', () => {
    cy.visit("https://demoqa.com/automation-practice-form")
})

When('Segundo paso de la prueba', () => {
    cy.get("#firstName").type(example).tab().type(example).tab().type(example)
})

When('Tercer paso de la prueba', () => {
    cy.get("#gender-radio-1").check({ force: true })
})

And('Concatenacion por si lo necesitamos', () => {
    cy.get("#userNumber").type(example)
})

Then('finalizacion de la prueba', () => {
    let img = "imagen.jpg"
    cy.get("#uploadPicture").attachFile(img) //Hemos seleccionado el botón para subir una imagen y hemos cargado una imagen. 
    cy.get("#submit").click({ force: true })
})
