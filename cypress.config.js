const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '86wb9p',
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //video: true,
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // return config;
    },
    chromeWebSecurity: false,
    // baseUrl: "https://www.saucedemo.com/",
    baseUrl: "https://react-js-51180-studio-chic.vercel.app/",
    experimentalStudio: true,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',      // Directorio de salida para los reportes
    overwrite: false,
    html: true,
    json: true,
    charts: true                       
    }           // Habilita gráficos en el reporte
  });
