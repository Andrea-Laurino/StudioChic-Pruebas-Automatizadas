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
        this.btn_purchase = '.contador > a > .btn-login > .login',
        //link products
        this.linkProducts = '[href="/products"]';
        this.allProduct = '.card-container';
        this.oneProduct = '[href="/products/2NEo2TsCnZLOdHM4CDpw"] > .productoCard > .productoImg';
        this.addToCart = '.counter > div > .btn-count';
        //titulos
        this.select_titleProducts = 'h3',
        this.msg_titleProducts = 'Nuestras Categorias: ',
        this.select_titleHome = '.container > .text-center',
        this.msg_titleHome = 'La historia de nuestra empresa'
        // formulario roden de compra
        this.namePurchase = '#name',
        this.txtNamePurchase = 'lita',
        this.addressPurchase = '#address'
        this.msg_address = 'hola123',
        this.phonePurchase = '#phone',
        this.numberPhone = '1234567890',
        this.emailPurchase = '#email',
        this.dataEmail = 'lita@gmail.com'
        //toast
        this.checkoutToast = '.Toastify__toast-body > div'
    }
}

export default new Cart();
