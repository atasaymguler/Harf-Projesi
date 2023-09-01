import { Component } from '@angular/core';
import {lorem} from 'faker'; //Burada import ederiz.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText ="";

  getInputValue(value: string)
  {
    this.enteredText = value; 
    console.log(this.randomText.split('')); 
    console.log(this.randomText.split(' ')); 

    //split metotu geriye array döner
    //split('') şeklinde kullanırsam boşluksuz ne kadar karakter varsa ör/20 karakterli ise 20 tane elemanı array döner boşluğu da saydı, noktayı da saydı ne kadar karakter içeriyorsa hepsini içeren bir array döndürür
    //split(' ') şelinde boşluklu kullanırsam boşluğu görünce keser kestiğe yere kadar 1 eleman sayar, boşuğa kadar kelimeyi tek eleman sayar  asd qwe asd 3 tane elemanlı  arrays döner boşlukları saymaz.

  }

}
