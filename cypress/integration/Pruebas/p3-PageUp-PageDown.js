//La función PageUp y PageDown sirve para subir y bajar la página. 

/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Esto es un template",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

    it("Esto es un template para Test",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
        cy.visit("https://demoqa.com/text-box") // Cy.visit sirve para visitar una web. 
        cy.get('#userName').type("{pagedown}") // con esta sentencia la web hará un scroll hacia abajo. 
        cy.wait(2000)
        cy.get('#userName').type("{pageup}") // con esta sentencia la web hará un scroll hacia arriba. 
    })
    
    })