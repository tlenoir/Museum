import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';

//customs *
import { DBObject } from "../data/typings";
const DATA_KEY = "data_";
let find: string;

/*
  Generated class for the FindOeuvreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FindOeuvreProvider {

  constructor(public http: HttpClient,
    private storage: Storage) {
    console.log('Hello FindOeuvreProvider Provider');
  }
  


  // to using functions, you need to input an object from data
  // not a value
  // =========

  // in fact, this functions create a new Array from the object
  // of the data_db.json and saved into storages'mobile.

  addToList(likeacode: DBObject) {
    this.storage.set(this.getDataKey(likeacode), JSON.stringify(likeacode));
  }
  resetDATA(likeacode: DBObject) {
    this.storage.remove(this.getDataKey(likeacode));
  }



  isAddFromScan(likeacode: DBObject) {
    return this.storage.get(this.getDataKey(likeacode));
  }
  checkedDATA(likeacode: DBObject) {
    this.isAddFromScan(likeacode).then(
      isFavorite =>
        isFavorite
          ? this.resetDATA(likeacode)
          : this.addToList(likeacode)
    );
  }
  getDataKey(likeacode: DBObject) {
    
    find = DATA_KEY + likeacode.id.toString();
    console.log("dataKeys: "+find);

    return find;
  }


  // return number of 'oeuvre' whos
  // set in storage
  getShowOeuvre(): Promise<DBObject[]> {
    return new Promise(resolve => {
      let results: DBObject[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(DATA_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }

}
