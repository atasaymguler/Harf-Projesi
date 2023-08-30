import { Component } from '@angular/core';
import {lorem} from 'faker'; //Burada import ederiz.
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harf';
  randomText = lorem.sentence();  //Random gelen metinler randomText'e aktarılacaktır.

  randomNumber =0;
  

  click()
  {
    this.randomNumber = faker.number.int();
    console.log(this.randomNumber)
  }

}
