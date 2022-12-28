/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 
require('cypress-plugin-tab')
//Esta es la funcion tab. Con el require y su previa instalación a traves de la terminal (npm install -D cypress-plugin-tab) podremos usarla.
require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Una gran cantidad de páginas da error de este tipo y nos impiden realizar los test. Con estas sentencias se arregla. 

describe("Tipos de selectores",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Selector por ID",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box/") // Cy.visit sirve para visitar una web. 
    cy.get("#userName").should("be.visible").type("pass") // para coger por su ID. 
})

it("Selector por Clase",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box/") // Cy.visit sirve para visitar una web. 
    cy.get(".mr-sm-2.form-control").should("be.visible") //para coger por clase. A veces selecciona varios a la vez ya que la clase se llama igual en varios campos. 
})

it("Selector por Atributo",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box/") // Cy.visit sirve para visitar una web. 
    cy.get("[placeholder='Full Name']").should("be.visible").type("pass") //para coger por un atributo, en este caso el "placeholder"
})

it("Selector por Xpath",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/text-box/") // Cy.visit sirve para visitar una web. 
    cy.xpath("//*[@id='userName']").should("be.visible").type("pass") //para coger por un atributo, en este caso el "placeholder"
})

it("Selector por Contains",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.visit("https://demoqa.com/radio-button") // Cy.visit sirve para visitar una web. 
    cy.get(".custom-control-label").contains("Yes").click() //para coger por contains. Dentro del elemento buscamos si contiene algún texto y lo usamos. En este caso el texto era "Yes"
})

})