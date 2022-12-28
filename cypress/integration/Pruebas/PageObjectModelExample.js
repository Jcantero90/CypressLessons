class ProyectoEjemplo_PO{
    visitHome(website,title){
        cy.visit(website)
        cy.title().should("eq", title)
    }
}//Ending theme.

export default ProyectoEjemplo_PO;