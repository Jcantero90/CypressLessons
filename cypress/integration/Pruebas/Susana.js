/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
import"cypress-file-upload" //Plugin para subir imagenes a una web. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Esto es un template",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Entrar y validar los valores de la página",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/automation-practice-form") // Cy.visit sirve para visitar una web. 
    cy.title().should("eq","ToolsQA")
    cy.document().should("have.property","charset").and("eq","UTF-8")
    cy.url().should("eq","https://demoqa.com/automation-practice-form")    
})

it("Rellenar y validar campos",()=>{
    cy.get("#firstName").should("have.class","mr-sm-2").and("be.visible").and("be.enabled").then(()=>{
        cy.get("#firstName").type("NameExample")
    })
})

it("Validar un Radio Button",()=>{
    cy.get("#gender-radio-1").should("not.be.checked").then(()=>{
        cy.get("#gender-radio-1").check({force:true})
    })
})

it("Subir Fotografía",()=>{
    let img = "imagen.jpg"
    cy.get("#uploadPicture").attachFile(img)
})

})