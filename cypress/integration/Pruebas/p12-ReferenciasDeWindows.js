/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath')
//Este require nos permite elegir elementos por el Xpath. 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Referencias de Windows",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Validar Charset",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/") // Cy.visit sirve para visitar una web. 
    cy.document().should("have.property","charset").and("eq","UTF-8") //Lo usamos para validar el "charset" de la página en cuestión. 
})

it("Validar URL",()=>{
    cy.visit("https://demoqa.com/text-box")
    cy.url().should("include","text-box") //Validar un fragmento de URL
    cy.url().should("eq","https://demoqa.com/text-box") //Validar una URL completa.
})

})