/// <reference types="cypress" />
import start from "../../selectores/login";

describe("Automated Test Case", () => {
    // variable global
    let myData;

    beforeEach("Login StudioChic with userValid", () => {
        // Accede a la URL de la página principal 
        cy.visit("/");
        //cy.wait(3000);
        // Cargar los datos  del archivo JSON que contiene las credenciales de usuarios validos
        cy.fixture("./auth/userValid").then((test) => (
          // Asigna los datos cargados del JSON a la variable global
            myData = test));
    });

    it("Check the error msg ", () => {
      // Función que recorre el array de usuarios en el archivo JSON
        myData.forEach((data) => {
            // Rellenar el campo de email y password con los datos del JSON
            cy.logIn(start.user, data.email);
            cy.logIn(start.password, data.password);

            // Hacer clic en el botón de Iniciar Sesión
            cy.btn(start.btn_login)
            
            // Verificar que el mensaje de bienvenida sea el esperado
            // Variable dinamica por que el mensaje esperado interactua con el usuario ingresado.
            const expectedMessage = `Bienvenido ${data.email}!`;
            
            cy.verifyText(start.selec_welcome, expectedMessage);
            
            // Esperar a que el Toastify desaparezca antes de hacer click en el botón de cerrar sesión
            // Espera hasta que el toast ya no esté en el DOM
            cy.wait(5000)
            cy.get(start.selec_toastify).should("not.exist"); 

            // Hacer clic en el botón de cerrar sesión
            cy.btn(start.btn_logout)
            cy.wait(5000)
             // Verificar que el formulario de login es visible nuevamente después de cerrar sesión
            cy.beVisible(start.selec_form)
        });
    });
});
