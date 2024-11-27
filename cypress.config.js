const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '86wb9p',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // seteamos un timeout global
    defaultCommandTimeout: 4000,
    //conf para generar videos
    video: true,
    //confi requerida para el uso de mochawesome
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //config para el browser no arroje error
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push(
            '--disable-features=AutofillPasswordRanking',
            '--disable-features=AutofillSaveCard',
            '--disable-features=PasswordGeneration'
          )
        }
        return launchOptions
      })
    },
    chromeWebSecurity: false, 
    // url incial para testear
    baseUrl: "https://react-js-51180-studio-chic.vercel.app",
    //conf para el uso de Studio Beta
    experimentalStudio: true,
  },
  //conf para generar reportes 
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    // Directorio de salida para los reportes
    reportDir: 'cypress/reports',      
    overwrite: false,// Habilita gráficos en el reporte
    html: true,
    json: true,
    charts: true                       
    }           
  });
