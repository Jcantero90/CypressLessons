// Aquí mostraremos como validar el título de la página. 

/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Validar un título",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

    it("Validar el título del la web DemoQA",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
        cy.visit("https://demoqa.com/") // cy.visit sirve para visitar una web. 
        cy.title().should("eq","ToolsQA") //con cy.title junto al should validamos el título de la página.  
    })
    
    })