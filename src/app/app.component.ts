import { Component } from '@angular/core';
import {lorem} from 'faker'; //Burada import ederiz.
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harf';
  randomText = lorem.sentence();  //Random gelen metinler randomText'e aktarılacaktır.

}
