//La función Then es similar al If/else. Se usa saber que, si se cumple la condición anterior al .then , se realiza lo que esté dentro del Then. 



/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath')
//Este require nos permite elegir elementos por el Xpath. 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Esto es un template",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Esto es un template para Test",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/select-menu") // Cy.visit sirve para visitar una web. 
    cy.get("#oldSelectMenu").should("be.visible").then(()=>{ //Hemos especificado de que si es visible el menu de selección, que seleccione el color blue. 
        cy.get("#oldSelectMenu").select("Blue")
    })
})

})