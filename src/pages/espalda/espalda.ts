import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion'

/**
 * Generated class for the EspaldaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espalda',
  templateUrl: 'espalda.html',
})
export class EspaldaPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaldaPage');
  }

  openModal(characterNum) {
  let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }

}
