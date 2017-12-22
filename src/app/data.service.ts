import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  // getUsers() {
  //   return this._http.get("/users/users")
  //     .map(result => this.result = result.json());
  // }

   saveUser(data){
       console.log(data)
    return this._http.post("/users/",data)
        .map(result => this.result = result.json(),
      error=>   console.log(error));
   }

}