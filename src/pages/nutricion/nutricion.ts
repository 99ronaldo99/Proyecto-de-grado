import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { RetosPage } from '../retos/retos';*/

/**
 * Generated class for the NutricionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nutricion',
  templateUrl: 'nutricion.html',
})
export class NutricionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutricionPage');
  }

  /*retos(){ 
    this.navCtrl.setRoot(RetosPage)
  }*/
}
