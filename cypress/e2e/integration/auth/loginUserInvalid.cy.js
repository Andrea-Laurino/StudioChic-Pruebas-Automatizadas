/// <reference types="cypress" />
import start from "../../selectores/login";



describe("Automated Test Case", () => {
    // variable global
    let myData;

    beforeEach("Login StudioChic with userInvalid", () => {
        // Accede a la URL de la página principal 
        cy.visit("/");
        // Cargar los datos  del archivo JSON que contiene las credenciales de usuarios validos
        cy.fixture("./auth/userInvalid").then((test) => (
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
        
        // Verificar que aparezca la alerta
        cy.beVisible(error_alert);
        // Verificar el txt de la alerta
        cy.verifyText(error_alert, data.expectedError);

         // Limpiar los campos del formulario
        cy.get(start.user).clear();
        cy.get(start.password).clear();
        })

    })
  
  })