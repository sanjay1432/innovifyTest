import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers(data) {
    console.log(data)
    return this._http.post("/users/log",data)
      .map(result => this.result = result.json(), console.log(this.result));
  }

  getCards() {
    return this._http.get("/checkout/card")
      .map(result => this.result = result.json(), console.log(this.result));
  }
   saveUser(data){
       console.log(data)
    return this._http.post("/users/",data)
        .map(result => this.result = result.json(),
      error=>   console.log(error));
   }

   savecard(data){
      console.log(data)
  return this._http.post("/checkout/card",data)
      .map(result => this.result = result.json(),
    error=>   console.log(error));
  }
}