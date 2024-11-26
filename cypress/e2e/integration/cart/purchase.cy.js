/// <reference types="cypress" />
import cart from "../../selectores/cart";

describe("Automated Test Case", () => {
    // variable global
    let myData;

    beforeEach("Login StudioChic with userValid", () => {
        // Accede a la URL de la página principal 
        cy.visit("/");
        // Cargar los datos  del archivo JSON que contiene las credenciales de usuarios validos
        // cy.fixture("./cart/cart_login").then((test) => (
        //   // Asigna los datos cargados del JSON a la variable global
        //     myData = test));
    });
    

    it("purchase a product", () => {
        cy.get('#formBasicEmail').type('lita@gmail.com');
        cy.get('#formBasicPassword').type('098clave');
        cy.get('.login').click();    
        // wait para esperar que los productos esten disponibles
        cy.wait(5000)
        //seleccionamos el listado de productos
        cy.get('[href="/products"]').click();
        // seleccionamos un producto en particular para realizar la compra y colocamos un timeout para esperar la respuesta de la BBDD.
        cy.get('[href="/products/7VvvPqyvXdhpdMkDaMZR"] > .productoCard > .card-body', { timeout: 10000 }).click();
        
        cy.get('.counter > div > .btn-count').click();
        cy.get('.contador > a > .btn-login > .login').click();
        // llenamos formulario para finalizar la compra
        cy.get('#name').type('lita');
        cy.get('#address').type('hola123');
        cy.get('#phone').type('123456789');
        cy.get('#email').type('lita@gmail.com');
        cy.get('.login').click();
        cy.get('.Toastify__toast-body').should('be.visible');
        cy.get('.img-logo').click();
        cy.get('.welcome').should('have.text', 'Bienvenido lita@gmail.com!');

        
    });
        
    
});
