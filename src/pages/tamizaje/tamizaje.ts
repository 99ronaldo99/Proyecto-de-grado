import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*import { TabsPage } from '../tabs/tabs';*/



@IonicPage()
@Component({
  selector: 'page-tamizaje',
  templateUrl: 'tamizaje.html',
})
export class TamizajePage {



 

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TamizajePage');
  }

  openTabs(){
    this.navCtrl.setRoot(HomePage)
  }

}


