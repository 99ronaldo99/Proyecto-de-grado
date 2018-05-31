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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RepeticionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepeticionesPage = /** @class */ (function () {
    function RepeticionesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {
            peso: '',
            repeticiones: ''
        };
    }
    RepeticionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepeticionesPage');
    };
    RepeticionesPage.prototype.openTabs = function () {
        this.navCtrl.setRoot(HomePage);
    };
    RepeticionesPage.prototype.tryRepe = function () {
        var rm = (0.0333 * parseInt(this.user.peso) * parseInt(this.user.repeticiones) + 100);
        var alert = this.alertCtrl.create({
            title: 'Resultado',
            message: 'Su resultado es ' + rm,
            buttons: ['OK']
        });
        alert.present();
    };
    RepeticionesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-repeticiones',
            templateUrl: 'repeticiones.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], RepeticionesPage);
    return RepeticionesPage;
}());
export { RepeticionesPage };
//# sourceMappingURL=repeticiones.js.map