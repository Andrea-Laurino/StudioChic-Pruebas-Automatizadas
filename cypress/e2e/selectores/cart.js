class Cart {
    constructor() {
        //form
        this.selec_form = '.resumen > .container-fluid';
        //user & password
        this.user = '#formBasicEmail';
        this.password = '#formBasicPassword';
        //botons
        this.btn_login = '.login';
        this.btn_logout = '.btnLogout';
        //alertas & toastify
        this.selec_toastify = '.Toastify__toast-container';
        this.selec_welcome = '.welcome';
        this.msg_welcome= "Bienvenido ";
        this.error_alert = '.alert > span';
        
    }
}

export default new Cart();
