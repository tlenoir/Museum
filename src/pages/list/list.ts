import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//customs *
import { ContactPage } from "../contact/contact";
import { DBObject } from "../../providers/data/typings";
import { GetOeuvreProvider } from "../../providers/get-oeuvre/get-oeuvre";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data_bdd = new Array<DBObject>();
  getNumber: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gop: GetOeuvreProvider
  ) {

    console.log(this.data_bdd);
  }
  ionViewDidLoad(){
    console.log("ionViewDidLoad listPage");
    this.gop.getDATA().subscribe(data => {
      this.data_bdd = data;
    });
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter ListPage");
    
  }

  showContact() {
    this.navCtrl.push(ContactPage);
  }

}
