class ProyectoEjemplo_PO{
    visitHome(website,title){
        cy.visit(website)
        cy.title().should("eq", title)
    }
    cogerAlgo(algo,texto){
        cy.get(algo).type(texto)
    }
    metodoQueQuierasCrear(){
        cy.get("#lastName").type("otroEjemplo")
    }
}//Ending theme.

export default ProyectoEjemplo_PO;