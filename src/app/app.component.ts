import { Component } from '@angular/core';
import {lorem} from 'faker'; //Burada import ederiz.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();

  getInputValue(value: string)
  {
    console.log(value); //inputtan gelen değeri kontrol ederiz.

  }

}
