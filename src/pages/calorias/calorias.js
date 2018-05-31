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
 * Generated class for the CaloriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaloriasPage = /** @class */ (function () {
    function CaloriasPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.aling = 'start';
        this.kcal = {
            peso: '',
            altura: '',
            edad: '',
            gender: '',
            actividad: ''
        };
    }
    CaloriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CaloriasPage');
    };
    CaloriasPage.prototype.openTabs = function () {
        this.navCtrl.setRoot(HomePage);
    };
    CaloriasPage.prototype.tryKcal = function () {
        var tmbhombre = (10 * parseInt(this.kcal.peso) + (6.25 * parseInt(this.kcal.altura)) - (5 * parseInt(this.kcal.edad)) + 5);
        var tmbmujer = (10 * parseInt(this.kcal.peso) + (6.25 * parseInt(this.kcal.altura)) - (5 * parseInt(this.kcal.edad)) - 160);
        var kcal1 = tmbhombre * 1.12;
        var kcal2 = tmbmujer * 1.12;
        var kcal3 = tmbhombre * 1.375;
        var kcal4 = tmbmujer * 1.375;
        var kcal5 = tmbhombre * 1.55;
        var kcal6 = tmbmujer * 1.55;
        var kcal7 = tmbhombre * 1.725;
        var kcal8 = tmbmujer * 1.725;
        var actividad = this.kcal.actividad;
        var gender = this.kcal.gender;
        if (gender == "f" && actividad == "a") {
            var alert_1 = this.alertCtrl.create({
                title: 'Resultado',
                message: 'Su resultado es ' + kcal2,
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (gender == "m" && actividad == "a") {
                var alert_2 = this.alertCtrl.create({
                    title: 'Resultado',
                    message: 'Su resultado es ' + kcal1,
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                if (gender == "f" && actividad == "b") {
                    var alert_3 = this.alertCtrl.create({
                        title: 'Resultado',
                        message: 'Su resultado es ' + kcal4,
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                else {
                    if (gender == "m" && actividad == "b") {
                        var alert_4 = this.alertCtrl.create({
                            title: 'Resultado',
                            message: 'Su resultado es ' + kcal3,
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                    else {
                        if (gender == "f" && actividad == "c") {
                            var alert_5 = this.alertCtrl.create({
                                title: 'Resultado',
                                message: 'Su resultado es ' + kcal6,
                                buttons: ['OK']
                            });
                            alert_5.present();
                        }
                        else {
                            if (gender == "m" && actividad == "c") {
                                var alert_6 = this.alertCtrl.create({
                                    title: 'Resultado',
                                    message: 'Su resultado es ' + kcal5,
                                    buttons: ['OK']
                                });
                                alert_6.present();
                            }
                            else {
                                if (gender == "f" && actividad == "d") {
                                    var alert_7 = this.alertCtrl.create({
                                        title: 'Resultado',
                                        message: 'Su resultado es ' + kcal8,
                                        buttons: ['OK']
                                    });
                                    alert_7.present();
                                }
                                else {
                                    if (gender == "m" && actividad == "d") {
                                        var alert_8 = this.alertCtrl.create({
                                            title: 'Resultado',
                                            message: 'Su resultado es ' + kcal7,
                                            buttons: ['OK']
                                        });
                                        alert_8.present();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    CaloriasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-calorias',
            templateUrl: 'calorias.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], CaloriasPage);
    return CaloriasPage;
}());
export { CaloriasPage };
//# sourceMappingURL=calorias.js.map