//Aquí escribiremos en una textBox y luego pulsaremos enter. 

/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 

describe("Escribir en la TextBox de Google",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

    it("Escribir y pulsar enter",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
        cy.visit("https://www.google.com/") // Cy.visit sirve para visitar una web. 
        cy.title().should("eq","Google") //Validamos el título de la página
        cy.get('#L2AGLb > .QS5gu').click() //Hacemos click en un elemento de la página. 
        cy.get('.gLFyf').type("google {enter}") //Hemos seleccionado con el get el texBox de google y ahora hemos escrito en él "google" y hemos pulsado enter. 
    })
    
    })