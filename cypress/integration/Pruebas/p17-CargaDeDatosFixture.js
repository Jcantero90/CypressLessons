/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
import"cypress-file-upload" //Plugin para subir imagenes a una web. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Cargando datos desde archivo Json ubicado en Fixture",()=>{ 
   
    before(function(){ //No se puede hacer sin el before. 
        cy.fixture("example").then(function(data){ //cargamos el archivo Json dentro de nuestra variable data.
            globalThis.data=data;
        })
    })
  

it("Prueba en DemoQA de carga de datos desde archivo Json",()=>{ 
    cy.visit("https://demoqa.com/text-box") 
    cy.get("#userName").type(data.name).tab().type(data.email)
})

it("Variables locales",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box") // Cy.visit sirve para visitar una web. 
    cy.fixture("example.json").then(data_2 =>{ //con cy.fixture accedemos a los archivos que tengamos dentro de fixture. Creamos el objeto "Data_2", para acceder a los elementos dentro del json. Esta variable será local, por ende, solo este it puede usarlo. 
    cy.get("#userName").type(data_2.name)
    cy.get("#userEmail").type(data_2.email)    
    })
})

})