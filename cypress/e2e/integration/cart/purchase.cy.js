// <reference types="cypress" />
import cart from "../../selectores/cart";
import "cypress-real-events";



describe("Automated Test Case", () => {
    beforeEach("Login StudioChic with userValid", () => {
        cy.fixture('./cart/credentials').then((credenciales) => {
            cy.visit('/');
            //cy.wait(3000);
            //login de un usuario
            cy.logIn(cart.user, credenciales.email);
            cy.logIn(cart.password, credenciales.password);
            cy.btn(cart.btn_login);
            //Add Products To Cart
            cy.wait(3000);
            cy.get(cart.linkProducts).realClick();
            cy.verifyText(cart.select_titleProducts, cart.msg_titleProducts);
            cy.beVisible(cart.allProduct);
            cy.btn(cart.oneProduct);
            cy.btn(cart.addToCart);
        });
    });
    
    it("purchase a product", () => {
        //seleccionamos "Terminar Compra"
        cy.btn(cart.btn_purchase);
        // Formulario para finalizar Orden de Compra
        cy.logIn(cart.namePurchase, cart.txtNamePurchase);
        cy.logIn(cart.addressPurchase, cart.msg_address);
        cy.logIn(cart.phonePurchase, cart.numberPhone);
        cy.logIn(cart.emailPurchase, cart.dataEmail);
        // // seleccionamos "Generar odern de compra"
        cy.btn(cart.btn_login);
        // chequeamos que se haya generado la orden de compra
        cy.beVisible(cart.checkoutToast);
        cy.wait(4000)
        //cerramos sesion
        cy.btn(cart.btn_logout)

    });

});