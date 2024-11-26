class Registration {
    constructor() {
        //link para registrarse en el form de login
        this.link_register = '.ml-4';
        //form login
        this.selec_form = '.resumen > .container-fluid';
        //user & password
        this.mail = '#formBasicEmail';
        this.passw = '#formBasicPassword';
        //botons
        this.btn_login = '.login';
        this.btn_logout = '.btnLogout';
        //alertas & toastify
        this.selec_toastify = '.Toastify__toast-container';
        this.selec_welcome = '.welcome';
        this.msg_welcome= "Bienvenido "; 
    }
}

export default new Registration();
