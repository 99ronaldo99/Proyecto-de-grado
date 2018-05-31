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
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformacionPage = /** @class */ (function () {
    function InformacionPage(navCtrl, navParams, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.params = params;
        var characters = [
            {
                name: 'Press banco Plano',
                quote1: '1.Acostarse en un banco plano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/press banco plano.gif',
                photo: 'assets/imagenes/pectorales/press banco plano.jpg',
            },
            {
                name: 'Press banco manos juntas',
                quote1: '1.Acostarse en un banco plano',
                quote2: '2.Tomar barra en agarre estrecho',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/press banco manos juntas.gif',
                photo: 'assets/imagenes/pectorales/press banco manos juntas.jpg',
            },
            {
                name: 'Press  banco inclinado',
                quote1: '1.Acostarse en un banco inclinado',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/press banco inclinado.gif',
                photo: 'assets/imagenes/pectorales/press banco inclinado.jpg',
            },
            {
                name: ' Press banco declinado  ',
                quote1: '1.Acostarse en un banco decliado',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/press banco declinado.gif',
                photo: 'assets/imagenes/pectorales/press banco declinado.jpg',
            },
            {
                name: 'Press de barra en maquina',
                quote1: '1.Sentarse con la espalda recta',
                quote2: '2.Tomar las barras de los mandos',
                quote3: '3.Estira tus brazos mientras exhalas',
                quote4: '4.Inhala mientras recoges los brazos',
                image: 'assets/imagenes/pectorales/press de barra en maquina.gif',
                photo: 'assets/imagenes/pectorales/press de barra en maquina.jpg',
            },
            {
                name: 'Press  con mancuernas',
                quote1: '1.Acostarse en un banco plano',
                quote2: '2.Tomar dos mancuernas del mismo peso',
                quote3: '3.Exhalar mientras estiras los brazos',
                quote4: '4.Inhalar mientras bajas las mancuernas',
                quote5: '5.Repetir el movimiento ritmicamente',
                image: 'assets/imagenes/pectorales/press  con mancuernas.gif',
                photo: 'assets/imagenes/pectorales/press  con mancuernas.jpg',
            },
            {
                name: ' Pull over con mancuerna',
                quote1: '1.Acostarse en un banco plano',
                quote2: '2.Tomar la barra en pronacion ',
                quote3: '3.Tomar barra al hancho de los hombros',
                quote4: '4.Bajar la barra por detras de la cabeza',
                quote5: '5.Exhalar volviendo a la posicion inicial',
                image: 'assets/imagenes/pectorales/pull over con mancuerna.gif',
                photo: 'assets/imagenes/pectorales/pull over con mancuerna.jpg',
            },
            {
                name: 'Apertura de contractor',
                quote1: '1.Sentarse en la maquina con espalda recta',
                quote2: '2.Apoyar los brazos en la maquina',
                quote3: '3.Cerrar los brazos ',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/apertura de contractor.gif',
                photo: 'assets/imagenes/pectorales/apertura de contractor.jpg',
            },
            {
                name: 'Cruce de poleas',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/cruce de poleas.gif',
                photo: 'assets/imagenes/pectorales/cruce de poleas.jpg',
            },
            {
                name: 'Flexiones de brazos',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexiones de brazos.gif',
                photo: 'assets/imagenes/pectorales/flexiones de brazos.jpg',
            },
            {
                name: 'flexion de triceps',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion de triceps.gif',
                photo: 'assets/imagenes/pectorales/flexiones de brazos.jpg',
            },
            {
                name: 'Flexion diamante',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/Flexion diamante.gif',
                photo: 'assets/imagenes/pectorales/flexiones de brazos.jpg',
            },
            {
                name: 'flexion  inclinado',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion  inclinado.gif',
                photo: 'assets/imagenes/pectorales/cruce de poleas.jpg',
            },
            {
                name: 'Flexiones declinadas',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/cruce de poleas.gif',
                photo: 'assets/imagenes/pectorales/cruce de poleas.jpg',
            },
            {
                name: 'Fondos',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/fondos.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Flexion con palmadas',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion con palmadas.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Flexion delfin',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Flexion arquero',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote1: '1.Acostarse en un banco pano',
                quote2: '2.Tomar barra en agarre pronacion',
                quote3: '3.Inhalar mientras bajas la barra al pecho',
                quote4: '4.Exhalar mientras subes la barra del pecho',
                image: 'assets/imagenes/pectorales/flexion delfin.gif',
                photo: 'assets/imagenes/pectorales/fondos.jpg',
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Dominadas Polea Nuca',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
        ];
        this.character = characters[this.params.get('charNum')];
    }
    InformacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformacionPage');
    };
    InformacionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-informacion',
            templateUrl: 'informacion.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            NavParams])
    ], InformacionPage);
    return InformacionPage;
}());
export { InformacionPage };
//# sourceMappingURL=informacion.js.map