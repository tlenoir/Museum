import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { BddPage } from "../bdd/bdd";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list_oeuvre = [];


  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  //button profile page redirection
  showProfile(id) {

    console.log(id);
    this.navCtrl.push(ProfilePage, { idl: id });
  }


  //bdd oeuvres
  oeuvres() {

    return this.list_oeuvre = [
      {
        id: 0, name: "Jean-Pierre ALVAREZ", bachacha: false, code: 9213750369, img: "assets/imgs/photos/9213750369.jpg"
      },
      {
        id: 1, name: "Poeragui ARAI", bachacha: true, code: 6510403686, img: "assets/imgs/photos/6510403686.jpg"
      },
      {
        id: 2, name: "Jérôme CHANSIN", bachacha: false, code: 7216899933, img: "assets/imgs/photos/7216899933.jpg"
      },
      {
        id: 3, name: "Jonas CHEUNG-SEN", bachacha: false, code: 1629568455, img: "assets/imgs/photos/1629568455.jpg"
      },
      {
        id: 4, name: "Heimana CUNY", bachacha: false, code: 9266553664, img: "assets/imgs/photos/9266553664.jpg"
      },
      {
        id: 5, name: "Nicolas EBB", bachacha: false, code: 1168085824, img: "assets/imgs/photos/1168085824.jpg"
      },
      {
        id: 6, name: "Alexandre LEHARTEL", bachacha: false, code: 2791010818, img: "assets/imgs/photos/2791010818.jpg"
      },
      {
        id: 7, name: "Tetuaoro LENOIR", bachacha: false, code: 4173047359, img: "assets/imgs/photos/4173047359.jpg"
      },
      {
        id: 8, name: "Joane LY", bachacha: true, code: 6872232276, img: "assets/imgs/photos/6872232276.jpg"
      },
      {
        id: 9, name: "Vaitiare MONACO", bachacha: true, code: 4653519064, img: "assets/imgs/photos/4653519064.jpg"
      },
      {
        id: 10, name: "Ariipaea PAEAHI", bachacha: false, code: 3658034121, img: "assets/imgs/photos/3658034121.jpg"
      },
      {
        id: 11, name: "Aito PAMBRUN", bachacha: false, code: 5175547403, img: "assets/imgs/photos/5175547403.jpg"
      },
      {
        id: 12, name: "Hi'omai PAMBRUN", bachacha: false, code: 9520532017, img: "assets/imgs/photos/9520532017.jpg"
      },
      {
        id: 13, name: "Rahiti PEREZ", bachacha: false, code: 1228597258, img: "assets/imgs/photos/1228597258.jpg"
      },
      {
        id: 14, name: "Matihanu PERRY", bachacha: false, code: 5480211371, img: "assets/imgs/photos/5480211371.jpg"
      },
      {
        id: 15, name: "Christian ROUSSEL", bachacha: false, code: 2462643924, img: "assets/imgs/photos/2462643924.jpg"
      },
      {
        id: 16, name: "Tinirau TEHUPE", bachacha: false, code: 5055364030, img: "assets/imgs/photos/5055364030.jpg"
      },
      {
        id: 17, name: "Tinirau TEMATAHOTOA", bachacha: false, code: 6232447902, img: "assets/imgs/photos/6232447902.jpg"
      },
      {
        id: 18, name: "Teparii TOOFA", bachacha: false, code: 4235066246, img: "assets/imgs/photos/4235066246.jpg"
      },
      {
        id: 20, name: "Terremu MARO", bachacha: false, code: 1234567890, img: "assets/imgs/photos/1234567890.jpg"
      },

    ];

  }

}
