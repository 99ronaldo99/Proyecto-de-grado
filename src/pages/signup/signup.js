var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { HomePage } from '../home/home';
/*import { Utils } from '../../libs/utils/utils';*/
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, usersserviceProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersserviceProvider = usersserviceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.align = 'start';
        //
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var account = {
            nombre: this.nombre,
            apellido: this.apellido || '',
            edad: this.edad || '',
            estatura: this.estatura || '',
            email: this.email,
            password: this.password,
            peso: this.peso || '',
            masculino: this.masculino || '',
            femenino: this.femenino || '',
            BajaIntensidad: this.BajaIntensidad || '',
            MedianaIntensidad: this.MedianaIntensidad || '',
            NingunaActividad: this.NingunaActividad || '',
            AltaIntensidad: this.AltaIntensidad || '',
        };
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando",
        });
        loader.present();
        this.usersserviceProvider.signupUserService(account).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(HomePage);
        }, function (error) {
            loader.dismiss();
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: 'Correo electronico invalido',
                duration: 5000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty the password field
        });
    };
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
            providers: [UsersserviceProvider],
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            UsersserviceProvider,
            ToastController,
            LoadingController])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map