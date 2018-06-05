import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//plugins add ======
import { IonicStorageModule } from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


//pages defaults
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//customs making
import { ProfilePageModule } from "../pages/profile/profile.module";
import { FindOeuvreProvider } from '../providers/find-oeuvre/find-oeuvre';
import { GetOeuvreProvider } from '../providers/get-oeuvre/get-oeuvre';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ProfilePageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FindOeuvreProvider,
    GetOeuvreProvider,
    DataProvider
  ]
})
export class AppModule {}
