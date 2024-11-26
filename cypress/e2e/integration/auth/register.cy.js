/// <reference types="cypress" />
import registration from "../../selectores/register";

describe("Automated Test Case", () => {
    // variable global
    let myData;

    beforeEach("Register StudioChic", () => {
        // Accede a la URL de la página principal 
        cy.visit("/");
        // Cargar los datos  del archivo JSON que contiene las credenciales de usuarios validos
        cy.fixture("./auth/register.json").then((test) => (
          // Asigna los datos cargados del JSON a la variable global
            myData = test));
    });

    it("register a new user ", () => {
        // Función que recorre el array de usuarios en el archivo JSON
        myData.forEach((data) => {
        //seleccionar el form Regiter
        cy.btn(registration.link_register);
        
        // Rellenar el campo de email y password con los datos del JSON
        cy.logIn(registration.mail, data.email);
        cy.logIn(registration.passw, data.password);

        // Hacer clic en el botón de Iniciar Sesión
        cy.btn(registration.btn_login);
        
        // Verificar que el mensaje de bienvenida sea el esperado
        cy.beVisible(registration.selec_toastify)
        // verificar que el Toastify desaparezca antes de hacer click en el botón de cerrar sesión
        // Espera hasta que el toast ya no esté en el DOM, por eso se coloca timeout
        cy.get(registration.selec_toastify, { timeout: 10000 }).should("not.exist");
        
        // Verificar que el mensaje de bienvenida sea el esperado
        // Variable dinamica por que el mensaje esperado interactua con el usuario ingresado.
        const expectedMessage = `Bienvenido ${data.email}!`;
        cy.verifyText(registration.selec_welcome, expectedMessage);
        
        // Hacer clic en el botón de cerrar sesión
        cy.btn(registration.btn_logout)
        
        // verificar que el Toastify desaparezca antes de hacer click en el botón de cerrar sesión
        // Espera hasta que el toast ya no esté en el DOM, por eso se coloca timeout
        cy.get(registration.selec_toastify, { timeout: 10000 }).should("not.exist");
        
        // Verificar que el formulario de login es visible nuevamente después de cerrar sesión
        cy.beVisible(registration.selec_form)
    });
});
})
