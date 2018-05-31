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
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
var PectoralesPage = /** @class */ (function () {
    function PectoralesPage(navCtrl, navParams, platform, params, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    PectoralesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PectoralesPage');
    };
    PectoralesPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(InformacionPage, characterNum);
        modal.present();
    };
    PectoralesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pectorales',
            templateUrl: 'pectorales.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform,
            NavParams,
            ViewController,
            ModalController])
    ], PectoralesPage);
    return PectoralesPage;
}());
export { PectoralesPage };
//# sourceMappingURL=pectorales.js.map