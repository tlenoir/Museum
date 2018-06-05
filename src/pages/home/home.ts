import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";

//customs *
import { FindOeuvreProvider } from "../../providers/find-oeuvre/find-oeuvre";
import { GetOeuvreProvider } from "../../providers/get-oeuvre/get-oeuvre";
import { TabsPage } from "../tabs/tabs";
import { ProfilePage } from "../profile/profile";
import { DBObject } from "../../providers/data/typings";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  dataToShow: DBObject[];

  data_bdd = new Array<DBObject>();
  Total: number;
  Rest: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fop: FindOeuvreProvider,
    private appCtrl: App,
    private gop: GetOeuvreProvider
  ) {

    
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");

    this.gop.getDATA().subscribe(data => {
      this.data_bdd = data;
    });

    this.Total = this.data_bdd['lenght'];

    console.log("Total: "+this.data_bdd['lenght']);
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter HomePage");

    this.initPage();
  }

  initPage() {
    this.fop
      .getShowOeuvre()
      .then(dbdata => {
        (this.dataToShow = dbdata);

        console.log("1: "+this.dataToShow);

        
      })
      .catch(() =>
    {this.fop
      .getShowOeuvre()
      .then(dbdata => {
        (this.dataToShow = dbdata);

        console.log("2: "+this.dataToShow);
      })});
  }

  showProfile(code: number) {
    this.navCtrl.push(ProfilePage, { idalCode: code });
  }

  rm() {
    for (let rmx = 0; rmx < this.dataToShow.length; rmx++) {
      const element = this.dataToShow[rmx];

      this.fop.resetDATA(element);
    }
  this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }
}
