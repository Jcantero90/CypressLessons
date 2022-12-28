/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab') //Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath') //Este require nos permite elegir elementos por el Xpath. 
require('@4tw/cypress-drag-drop') //para usar el drag and drop.
import"cypress-file-upload" //Plugin para subir imagenes a una web. 
// import { wrap } from "cypress/types/lodash";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo. Con estas sentencias se arregla. 

describe("Each y sus usos",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Para ver los elementos internos de una clase en cuestión",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/webtables")  
    cy.get(".col-12").each(($el,index,$list)=>{ // hemos codigo una tabla con varios rows. 
        let data = $el.text() //parseamos la información a texto. 
        cy.log(data) //este dato nos proporciona la localización del producto, es decir, los elementos de dicha clase.   
        cy.log(index) //es un índice donde se nos comenta la cantidad numérica de elementos con ese nombre en concreto que hay en la web.
        cy.log($list) //nos dará lo que lleva dentro la estructura como tal. 
    })
})

it("funcion Wrap",()=>{
    cy.visit("https://demoqa.com/webtables")  
    cy.get(".col-12").each(($el,index,$list)=>{ // hemos codigo una tabla con varios rows. 
        let data = $el.text() //parseamos la información a texto. 
        cy.log(data)
        if(data.includes("Text")){
            cy.wrap($el).click() //cuando aparezca el elemento "text" hará un click sobre él. 
        }
    })

})

})