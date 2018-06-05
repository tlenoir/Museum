import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";

//customs *
import { DBObject } from "../data/typings";

/*
  Generated class for the GetOeuvreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetOeuvreProvider {

  private UrldataDB: string = "../data/data_db.json";

  DATA: DBObject[];

  constructor(public http: HttpClient,
    public platform: Platform) {
    console.log('Hello GetOeuvreProvider Provider');

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.UrldataDB = "/build/data_db.json";
    }

  }

  getDATA(): Observable<any> {

    return this.http.get(`${this.UrldataDB}`);
  }
}
