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
  addedCards: any;
  user: any;
  title = 'app';
  cards = ['visa','master'];
  // Define a users property to hold our user data
  users:any;
  
  checkoutForm = new FormGroup ({
    name: new FormControl(),
    cards: new FormControl()
  });

  cardForm = new FormGroup ({
    cardName: new FormControl()
  });
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    this.getCards();
  }
  getCards(): void {
    this._dataService.getCards()
      .subscribe(cards =>{ 
           this.addedCards = cards
           console.log(cards)
      });
  }

  onSave(form):void{

  }
  onCardSave(form):void{
    console.log(form);
    this._dataService.savecard(form.value)
          .subscribe(res=>  this.getCards())
  }
}
