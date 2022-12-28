/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Funciones del click",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Click básico + click forzado + click con coordenadas",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/automation-practice-form") // Cy.visit sirve para visitar una web. 
    cy.get("#submit").click({force:true}) //el elemento está escondido, entonces con el force true se clickea de todas formas. 
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click(5,5) //le indicamos las coordenadas de donde queremos que clickee. 
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()//un click simple sobre un elemento. 
  })

})