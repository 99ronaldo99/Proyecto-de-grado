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
import { BicepsPage } from '../biceps/biceps';
import { TricepsPage } from '../triceps/triceps';
import { HombrosPage } from '../hombros/hombros';
import { PiernasPage } from '../piernas/piernas';
import { AbdomenPage } from '../abdomen/abdomen';
import { EspaldaPage } from '../espalda/espalda';
import { GluteosPage } from '../gluteos/gluteos';
import { PectoralesPage } from '../pectorales/pectorales';
import { ModalController, } from 'ionic-angular';
var EjerciciosPage = /** @class */ (function () {
    function EjerciciosPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.pet = "puppies";
        this.isAndroid = false;
        /*this.isAndroid = platform.is('android');*/
    }
    EjerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EjerciciosPage');
    };
    EjerciciosPage.prototype.openTabs = function () {
        this.navCtrl.setRoot(HomePage);
    };
    EjerciciosPage.prototype.openBiceps = function () {
        this.navCtrl.push(BicepsPage);
    };
    EjerciciosPage.prototype.openTriceps = function () {
        this.navCtrl.push(TricepsPage);
    };
    EjerciciosPage.prototype.openPectorales = function () {
        this.navCtrl.push(PectoralesPage);
    };
    EjerciciosPage.prototype.openHombros = function () {
        this.navCtrl.push(HombrosPage);
    };
    EjerciciosPage.prototype.openAbdomen = function () {
        this.navCtrl.push(AbdomenPage);
    };
    EjerciciosPage.prototype.openPiernas = function () {
        this.navCtrl.push(PiernasPage);
    };
    EjerciciosPage.prototype.openGluteos = function () {
        this.navCtrl.push(GluteosPage);
    };
    EjerciciosPage.prototype.openEspalda = function () {
        this.navCtrl.push(EspaldaPage);
    };
    EjerciciosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-ejercicios',
            templateUrl: 'ejercicios.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ModalController])
    ], EjerciciosPage);
    return EjerciciosPage;
}());
export { EjerciciosPage };
//# sourceMappingURL=ejercicios.js.map