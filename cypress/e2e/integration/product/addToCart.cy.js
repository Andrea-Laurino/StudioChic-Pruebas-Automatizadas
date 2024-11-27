// <reference types="cypress" />
import cart from "../../selectores/cart";
import "cypress-real-events";



describe("Automated Test Case", () => {
    beforeEach("Login StudioChic with userValid", () => {
        cy.fixture('./cart/credentials').then((credenciales) => {
            cy.visit('/');
            cy.wait(3000);
            //login de un usuario
            cy.logIn(cart.user, credenciales.email);
            cy.logIn(cart.password, credenciales.password);
            cy.wait(3000);
            cy.btn(cart.btn_login);
        });
    });
    
    it("purchase a product", () => {
            //verificamos el titulo del home
            cy.verifyText(cart.select_titleHome, cart.msg_titleHome);
            // seleccionamos productos para ver todos los productos a la venta
            cy.get(cart.linkProducts).realClick();
            // colocamos un timeout para que la bbdd nos devuelva los productos
            cy.verifyText(cart.select_titleProducts, cart.msg_titleProducts, { timeout: 2000 });
            // checkeamos que todos los productos esten en la pagina
            cy.beVisible(cart.allProduct);
            // seleccionamos un productos a comprar
            cy.btn(cart.oneProduct);
            // lo agregamos al carrito
            cy.btn(cart.addToCart);
            //cerramos sesion
            cy.btn(cart.btn_logout)
    });

})