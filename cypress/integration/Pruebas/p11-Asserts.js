/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath')
//Este require nos permite elegir elementos por el Xpath. 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Asserts avanzados",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Para validar un texto",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://practice.automationtesting.in/product/android-quick-start-guide/") // Cy.visit sirve para visitar una web. 
    cy.get("ins > .woocommerce-Price-amount").should("have.text","₹450.00") //Validamos que un elemento contenga un texto. 
})

it("Validar un texto dinámico",()=>{ //Me refiero a texto dinámico a aquel que nosotros introducimos y sale por pantalla. 
    let nombre = "Yoni";   
    cy.visit("https://demoqa.com/text-box")
    cy.get("#userName").type(nombre)
    cy.get('#submit').click()
    cy.get("#name").should("have.text","Name:"+nombre)
})

it("Validar una clase",()=>{
    cy.visit("https://demoqa.com/text-box")
    cy.get("#userName").should("have.class","mr-sm-2") //el have class te permite validar una clase asociada a un ID.
})

it("Validar numero de tablas con Lenght",()=>{
    cy.visit("https://www.w3schools.com/html/html_tables.asp")
    const table = cy.get("#customers")
    table.get("th").should("have.length",5)//validamos de la tabla en cuestión el th
    table.get("tr").should("have.length",18)//validamos de la tabla en cuestión el tr
})

})