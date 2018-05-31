var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
/*import { TamizajePage } from '../pages/tamizaje/tamizaje';*/
/*import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';*/
import { AcercaPage } from '../pages/acerca/acerca';
import { ImcPage } from '../pages/imc/imc';
import { CaloriasPage } from '../pages/calorias/calorias';
import { RepeticionesPage } from '../pages/repeticiones/repeticiones';
import * as firebase from 'firebase';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = LoginPage;
        this.initializeApp();
        var that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in .
                that.rootPage = HomePage;
                // ...
            }
            else {
                // User is signed out.
                // ...
                that.rootPage = LoginPage;
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: ' Inicio', component: HomePage, icon: 'home' },
            /*{ title: ' Tamizaje', component: TamizajePage, icon: 'body' },*/
            { title: ' Calcular IMC', component: ImcPage, icon: 'happy' },
            { title: ' Calorias necesarias', component: CaloriasPage, icon: 'nutrition' },
            { title: ' Repeticion maxima', component: RepeticionesPage, icon: 'pulse' },
            /*{ title: ' Configuracion', component: ConfiguracionesPage, icon: 'settings' },*/
            { title: ' Acerca de', component: AcercaPage, icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map