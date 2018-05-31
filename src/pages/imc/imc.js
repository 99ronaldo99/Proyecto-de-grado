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
var ImcPage = /** @class */ (function () {
    function ImcPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {
            peso: '',
            altura: ''
        };
    }
    ImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImcPage');
    };
    ImcPage.prototype.openTabs = function () {
        this.navCtrl.setRoot(HomePage);
    };
    ImcPage.prototype.tryCalcular = function () {
        var resultado1 = (parseFloat(this.user.altura) * parseFloat(this.user.altura));
        var resultado = parseInt(this.user.peso) / resultado1;
        if (resultado <= 10) {
            var alert_1 = this.alertCtrl.create({
                title: 'Estas Desnutrido',
                message: 'Su resultado es: ' + resultado,
                buttons: ['OK']
            });
            alert_1.present();
        } // alert("desnutrido" + resultado )
        else {
            if (resultado >= 10 && resultado <= 19) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Estas bajo de peso',
                    message: 'Su resultado es: ' + resultado,
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                if (resultado >= 19 && resultado <= 25) {
                    var alert_3 = this.alertCtrl.create({
                        title: 'Estas en peso normal',
                        message: 'Su resultado es: ' + resultado,
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                else {
                    if (resultado >= 25 && resultado <= 30) {
                        var alert_4 = this.alertCtrl.create({
                            title: 'Obesidad tipo 1',
                            message: 'Su resultado es: ' + resultado,
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                    else {
                        if (resultado >= 30 && resultado <= 35) {
                            var alert_5 = this.alertCtrl.create({
                                title: 'Obesidad tipo 2',
                                message: 'Su resultado es: ' + resultado,
                                buttons: ['OK']
                            });
                            alert_5.present();
                        }
                        else {
                            if (resultado >= 35 && resultado <= 40) {
                                var alert_6 = this.alertCtrl.create({
                                    title: 'Obecidad tipo 3',
                                    message: 'Su resultado es: ' + resultado,
                                    buttons: ['OK']
                                });
                                alert_6.present();
                            }
                        }
                    }
                }
            }
        }
    };
    ImcPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-imc',
            templateUrl: 'imc.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], ImcPage);
    return ImcPage;
}());
export { ImcPage };
//# sourceMappingURL=imc.js.map