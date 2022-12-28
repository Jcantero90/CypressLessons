/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Funcion Tab",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Uso del tab para rellenar los campos de DemoQA Text-Box",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box") // Cy.visit sirve para visitar una web. 
    cy.get("#userName").type("Example").tab().type("Example@mail.com").tab().type("Example").tab().type("Example") //Hemos usado la función tab para ir saltando de campo en campo.
    cy.get("#submit").click()
})

})