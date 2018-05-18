import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { ViewController } from 'ionic-angular';



/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  character;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public viewCtrl: ViewController,
    public params: NavParams,
  	) {
    var characters = [
      {
        name: 'Press banco Plano',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',                 /*0*/
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },                                                          
      {
        name: 'Press banco declinado',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',                  /*1*/
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Press  banco inclinado',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },                  /*2*/
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Fondos',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },                  /*3*/
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Flexion de pecho',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },                  /*4*/
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Flexion de pecho inclinado',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                        /*5*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: ' Dominadas polea pecho',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                      /*6*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*7*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*8*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*9*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*10*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*11*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*12*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*13*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*14*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*15*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*16*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*17*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*18*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*19*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*20*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*21*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*22*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*23*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*24*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*25*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*26*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*26*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*27*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*28*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*29*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*30*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*31*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*32*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*33*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*34*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*35*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*36*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*37*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*38*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*39*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*40*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*41*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*42*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*43*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*44*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*45*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*46*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*47*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Dominadas Polea Nuca',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [                                                    /*48*/
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },

      ];
      this.character = characters[this.params.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  

}
