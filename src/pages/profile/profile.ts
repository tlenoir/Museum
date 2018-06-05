import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

//customs *
import { DBObject } from "../../providers/data/typings";
import { FindOeuvreProvider } from "../../providers/find-oeuvre/find-oeuvre";
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  DATA: DBObject;
  addOeuvre: boolean = false;

  fromScanAcode: number;
  fromScanAnObject;
  url: string = "http://tcc.1click.pf/museum/index.php?mat=FVK96BLUEL&oeuvre=";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fop: FindOeuvreProvider,
    private appCtrl: App
  ) {

    this.fromScanAcode = this.navParams.get('idalCode');
    this.url = this.url + this.fromScanAcode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage')
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter ProfilePage');

  //Refresh HomePage et PrimaryTabsPage
  

}

ionViewWillLeave() {
  this.refreshHome();
}


public refreshHome() {
  this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
}
}
