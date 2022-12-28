/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Funcion Only",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it.only("Solo se ejecutará esta funcion",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/") // Cy.visit sirve para visitar una web. 
})

it("esta, al no llevar el only no se ejecutara",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://www.google.com/") // Cy.visit sirve para visitar una web. 
})

})