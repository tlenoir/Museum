import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  code;
  

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    this.code = this.navParams.get('idl');

    console.log(this.code);

}
}
