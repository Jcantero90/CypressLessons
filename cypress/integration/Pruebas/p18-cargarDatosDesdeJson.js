/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
import"cypress-file-upload" //Plugin para subir imagenes a una web. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Cargar datos desde Json",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box") // Cy.visit sirve para visitar una web. 
    cy.fixture("example.json").then(data =>{ //con cy.fixture accedemos a los archivos que tengamos dentro de fixture. Creamos el objeto "Data", para acceder a los elementos dentro del json.
    cy.get("#userName").type(data.name)
    cy.get("#userEmail").type(data.email)    
    cy.get('#submit').click()
    })
})

})