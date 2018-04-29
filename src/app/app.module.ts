import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
/*import { MaterialModule } from '@angular/material';*/
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { NutricionPage } from '../pages/nutricion/nutricion';
import { RetosPage } from '../pages/retos/retos';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { RecomendacionesPage } from '../pages/recomendaciones/recomendaciones';
import { TamizajePage } from '../pages/tamizaje/tamizaje';
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { AcercaPage } from '../pages/acerca/acerca';
import { ImcPage } from '../pages/imc/imc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';


// Initialize Firebase
export const config = {
    apiKey: "AIzaSyClGgQUX1esoRrK_EpVwFZ07FRBTSFOpVA",
    authDomain: "play-gym-e0995.firebaseapp.com",
    databaseURL: "https://play-gym-e0995.firebaseio.com",
    projectId: "play-gym-e0995",
    storageBucket: "play-gym-e0995.appspot.com",
    messagingSenderId: "99165358960"
  };
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    NutricionPage,
    RetosPage,
    EjerciciosPage,
    RutinasPage,
    RecomendacionesPage,
    TamizajePage,
    ConfiguracionesPage,
    AcercaPage,
    ImcPage,
   ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    NutricionPage,
    RetosPage,
    EjerciciosPage,
    RutinasPage,
    RecomendacionesPage,
    TamizajePage,
    ConfiguracionesPage,
    AcercaPage,
    ImcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider
  ]
})
export class AppModule {}
