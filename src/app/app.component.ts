import { Component } from '@angular/core';
import {lorem} from 'faker'; //Burada import ederiz.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText =""; //İnputtan gelen değeri buraya atmak için değişken oluşturduk, başlangıç değeri false yani boş

  getInputValue(value: string)
  {
    this.enteredText = value;  //İnputtan gelen değeri atarız
    console.log(value); //inputtan gelen değeri kontrol ederiz.

  }

}
