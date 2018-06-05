import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad ContactPage")
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnter ContactPage")
  }

}
