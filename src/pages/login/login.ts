import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
/*import * as firebase from 'firebase';*/
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { Facebook } from '@ionic-native/facebook'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {

  public email: string;
  public password: string;
  isUserLoggedIn: any = false;
  userInfo :any = {};

  constructor(public usersService : UsersserviceProvider, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,  
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: Facebook) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Cargando"
        });
        loader.present();
    
    
        this.usersService.loginUserService(this.email, this.password).then(authData => {
          //successful
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);
    
        }, error => {
    loader.dismiss();
         // Unable to log in
          let toast = this.toastCtrl.create({
            message: 'Usuario no registrado',
            duration: 5000,
            position: 'top'
          });
          toast.present();
    
    that.password = ""//empty the password field
    
        });
    
    
  }

  LoginFace(){
    

  }

  redirectToSignup(){

          this.navCtrl.push(SignupPage);
  }



}
