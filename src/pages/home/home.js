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
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NutricionPage } from '../nutricion/nutricion';
import { RutinasPage } from '../rutinas/rutinas';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { RecomendacionesPage } from '../recomendaciones/recomendaciones';
import { ConfiguracionesPage } from '../configuraciones/configuraciones';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, actionsheetCtrl, app, menu, alerCtrl, platform) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alerCtrl = alerCtrl;
        this.platform = platform;
    }
    HomePage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Nuestras Redes',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'YouTube',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'logo-youtube' : null,
                    handler: function () {
                        console.log('Delete clicked');
                        if (_this.platform.is('cordova')) {
                            cordova.InAppBrowser.open("https://www.youtube.com/", "_blank");
                        }
                        else {
                            window.open("https://www.youtube.com/", "_blank");
                        }
                    }
                },
                {
                    text: 'Facebook',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'logo-facebook' : null,
                    handler: function () {
                        console.log('Share clicked');
                        if (_this.platform.is('cordova')) {
                            cordova.InAppBrowser.open("https://www.facebook.com/", "_blank");
                        }
                        else {
                            window.open("https://www.facebook.com/", "_blank");
                        }
                    }
                },
                {
                    text: 'Twitter',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'logo-twitter' : null,
                    handler: function () {
                        console.log('Play clicked');
                        if (_this.platform.is('cordova')) {
                            cordova.InAppBrowser.open("https://twitter.com/?lang=en/", "_blank");
                        }
                        else {
                            window.open("https://twitter.com/?lang=en", "_blank");
                        }
                    }
                },
                {
                    text: 'Google +',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                        if (_this.platform.is('cordova')) {
                            cordova.InAppBrowser.open("https://plus.google.com/u/1/113385853126641825821/", "_blank");
                        }
                        else {
                            window.open("https://plus.google.com/u/1/113385853126641825821", "_blank");
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.doLogout = function () {
        this.navCtrl.setRoot(LoginPage);
    };
    HomePage.prototype.openEjercicios = function () {
        this.navCtrl.push(EjerciciosPage);
    };
    HomePage.prototype.openRutinas = function () {
        this.navCtrl.push(RutinasPage);
    };
    HomePage.prototype.openRecomendaciones = function () {
        this.navCtrl.push(RecomendacionesPage);
    };
    HomePage.prototype.openNutricion = function () {
        this.navCtrl.push(NutricionPage);
    };
    HomePage.prototype.openConfiguraciones = function () {
        this.navCtrl.push(ConfiguracionesPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ActionSheetController, App, MenuController,
            AlertController,
            Platform])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map