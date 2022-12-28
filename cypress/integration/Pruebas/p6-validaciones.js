//Los asserts son las validaciones como tal. Las usaremos para validar si los elementos están disponibles para los usuarios. 
/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Tipos de Asserts",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Validación de un título",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/") // Cy.visit sirve para visitar una web. 
    cy.title().should("eq","ToolsQA")
})

it("Validación de un campo, ver si está visible",()=>{
    cy.visit("https://demoqa.com/") 
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').should("be.visible") //este assert nos permite ver si es visible un campo. 
})

it("Validando si está disponible un textBox",()=>{
    cy.visit("https://demoqa.com/text-box")
    cy.get('#userName').should("be.enabled") //comprueba si está disponible un campo. 
})

it("Validando un radio button",()=>{
    cy.visit("https://demoqa.com/radio-button")
    cy.get("#yesRadio").check({force:true}).should("be.checked") //comprueba si el radio button está "checked".
    cy.get("#impressiveRadio").should("not.be.checked") //comprueba si el radio button no está "checked".
})

it("Validando un checkBox",()=>{
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.get("#hobbies-checkbox-1").check({force:true}).should("be.checked") //Comprueba si el checkbox se encuentra "checked".
    cy.get("#hobbies-checkbox-1").uncheck({force:true}).should("not.be.checked") //Comprueba si el checkbox está "unchecked".
})

it("Validando un objeto dentro de una lista",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/select-menu") // Cy.visit sirve para visitar una web. 
    cy.get('#oldSelectMenu').select("Blue").should("have.value","1")// hemos seleccionado y validado un objeto dentro de una lista. 
})

})