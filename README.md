# StudioChic-Pruebas-Automatizadas

<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<h2 align="center"> StudioChic - Pruebas Automatizadas con Cypress 👩‍💻 </h2>



<div id="user-content-toc">
  <ul align="center">
    Este repositorio contiene un **proyecto propio** en el que desarrollé y realicé pruebas automatizadas para un e-commerce. El objetivo principal fue garantizar la calidad y funcionalidad de las principales características de la plataforma.
  <ul>
</div>

## 🛍️ Descripción del Proyecto
StudioChic es un e-commerce diseñado para ofrecer una experiencia de compra intuitiva y segura. Como parte del desarrollo, implementé pruebas automatizadas con **Cypress** para verificar que las funcionalidades críticas del sistema operen correctamente.

### Funcionalidades Probadas

1. **Login:**
   - Pruebas con usuarios válidos e inválidos.
   - Verificación de mensajes de error específicos para credenciales incorrectas.
   - Validación de redirección y mensajes de bienvenida para usuarios autenticados.

2. **Registro:**
   - Validación del proceso de creación de cuenta.
   - Manejo de datos inválidos y mensajes de error correspondientes.
   - Confirmación de redirección al iniciar sesión después del registro exitoso.

3. **Carrito de Compras:**
   - Selección y compra de un producto.
   - Verificación de la correcta actualización del carrito al agregar productos.
   - Validación de la redirección a la pantalla de confirmación de compra.

4. **Visualización de Productos:**
   - Comprobación de la carga y visualización de todos los productos disponibles.
   - Validación de la navegación a los detalles de un producto.

## 🛠️ Tecnologías Utilizadas

- **Cypress:** Framework para pruebas E2E.
- **JavaScript:** Lenguaje utilizado para escribir las pruebas.
- **GitHub:** Control de versiones y repositorio remoto.
- **JSON:** Almacenamiento de datos ficticios para las pruebas (fixtures).

## 📂 Estructura del Proyecto

## 📂 Estructura del Proyecto

```plaintext
├── cypress/
│    ├── downloads/                                # Carpeta para descargas de archivos (si aplica)
│    ├── e2e/                                      # Pruebas E2E (End-to-End)
│    │   ├── integration/                          # Pruebas E2E específicas
│    │   │   ├── auth/                             # Pruebas relacionadas con login y registro de usuarios
│    │   │   │   ├── loginUserInvalid.cy.js        # Prueba de login con usuarios inválidos
│    │   │   │   ├── loginUserValid.cy.js          # Prueba de login con usuarios válidos
│    │   │   │   └── register.cy.js                # Prueba de registro de usuarios válidos
│    │   │   ├── cart/                             # Pruebas de funcionalidad del carrito de compras
│    │   │   │   └── purchase.cy.js                # Prueba de compra de un producto en el carrito
│    │   │   └── products/                         # Pruebas de visualización y acción sobre productos
│    │   │       └── addToCart.cy.js               # Prueba de agregar productos al carrito
│    ├── selectores/                               # Archivos que contienen los selectores de la aplicación
│    │   ├── cart.js                               # Selectores para el carrito de compras
│    │   ├── login.js                              # Selectores para el login 
│    │   └── register.js                           # Selectores para el registro
│    ├── fixtures/                                 # Datos ficticios para pruebas (mock data)
│    │   ├── auth/                                 # Datos para pruebas de autenticación
│    │   │    ├── register.json                    # Datos de prueba para el registro de usuarios
│    │   │    ├── userInvalid.json                 # Datos de prueba para usuarios inválidos en login
│    │   │    └── userValid.json                   # Datos de prueba para usuarios válidos en login
│    │   ├── cart/                                 # Datos para pruebas del carrito
│    │   │    └── cart_login.json                  # Datos de prueba para login y form de compra del carrito
│    ├── support/                                  # Comandos personalizados y configuraciones de Cypress
│    │   ├── commands.js                           # Funciones personalizadas utilizadas en las pruebas
│    │   └── e2e.js                                # Configuración global y setup para las pruebas E2E
├── reports/                                       # Carpeta para los reportes generados de las pruebas
├── cypress.config.js                              # Archivo de configuración de Cypress
├── package-lock.json                              # Archivo de dependencias bloqueadas
├── package.json                                   # Archivo de configuración de dependencias del proyecto
└── README.md                                      # Documentación del proyecto

