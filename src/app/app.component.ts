import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// Import the DataService
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Define a users property to hold our user data
  users:any;
  
  heroForm = new FormGroup ({
    username: new FormControl(),
    password: new FormControl()
  });
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getUsers() method we defined
    // this._dataService.getUsers()
    //     .subscribe(res => this.users = res);
  }

  onReg(form):void{
    console.log(form);
    this._dataService.saveUser(form.value)
          .subscribe(res=> console.log(res))
  }
}
