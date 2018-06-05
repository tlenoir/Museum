import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';

//plugins add
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

//pages defaults
import { ListPage } from "../list/list";
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

//customs *
import { DBObject } from "../../providers/data/typings";
import { GetOeuvreProvider } from "../../providers/get-oeuvre/get-oeuvre";
import { FindOeuvreProvider } from "../../providers/find-oeuvre/find-oeuvre";
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  result: BarcodeScanResult;
  code: number;
  newData = new Array<DBObject>();
  objectFind: DBObject;
  test: number;

  dataInterface: DBObject;

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private bcs: BarcodeScanner,
    private gop: GetOeuvreProvider,
    private fop: FindOeuvreProvider,
    private viewCtrl: ViewController) {

  }

  ionViewWillEnter() {

    console.log("ionViewWillEnter TabsPage");

    this.viewCtrl._didEnter();
  }

  scanRun() {
    const options: BarcodeScannerOptions = {
      torchOn: false,
      showFlipCameraButton: true,
      showTorchButton: true
    }
    this.bcs.scan(options)
      .then(res => {
        this.result = res;

        // transform 'string" to a 'number'
        this.code = parseFloat(this.result.text);
        console.log("code: " + this.code);

        // find object where 'code' is
        this.findObjectfromCode(this.code);
        console.log("object find: " + this.objectFind);

        // send too var -> an Object and a number
        this.fop.addToList(this.objectFind);
        this.navCtrl.push(ProfilePage, {
          idalCode: this.code
        });
      })
      .catch(() => {this.bcs.scan(options)
        .then(res => {
          this.result = res;
  
          // transform 'string" to a 'number'
          this.code = parseFloat(this.result.text);
          console.log("code: " + this.code);
  
          // find object where 'code' is
          this.findObjectfromCode(this.code);
          console.log("object find: " + this.objectFind);
  
          // send too var -> an Object and a number
          this.fop.addToList(this.objectFind);
          this.navCtrl.push(ProfilePage, {
            idalCode: this.code
          });
        })})

  }

  findObjectfromCode(codex: number) {

    this.gop.getDATA()
      .subscribe(data => {
        this.newData = data
      });
    console.log("nexData: " + this.newData);

    for (let array_key = 0; array_key < this.newData.length; array_key++) {
      const element = this.newData[array_key].code;

      console.log("element: " + element + " newData: " + this.newData[array_key].code);

      if (element == codex) {

        console.log("newData: " + this.newData);

        this.objectFind = this.newData[array_key];
        console.log("array_key: " + array_key);
        console.log("name: " + this.newData[array_key].name +
          " lastname: " + this.newData[array_key].lastname);
        break;

      } else {

        console.log("Le code n'existe pas !");

      }
    }
  }
}
