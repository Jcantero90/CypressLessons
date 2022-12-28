/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath')
//Este require nos permite elegir elementos por el Xpath. 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Funcion Select",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Select ",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/select-menu") // Cy.visit sirve para visitar una web. 
    cy.get('#oldSelectMenu').select("Blue").should("have.value","1")// hemos seleccionado y validado un objeto dentro de una lista. 
})

it("Multi-select",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/select-menu") // Cy.visit sirve para visitar una web. 
    cy.get('#cars').select(["Saab","Opel","Audi"])// Seleccionamos varias opciones de una lista multi-select. 
})

})