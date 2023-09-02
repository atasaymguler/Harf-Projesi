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

  }

  ata = "incorrect"; // html'deki class'a bu şekilde css classı gönderebiliyoruz html'de [class]="ata " yazarsak class'ı atarız.

  compare(randomLetter:string, enteredLetter:string)
  {
 //   console.log(randomLetter, enteredText);  Bu şekilde random gelen textin harfleri ile girilen değerin harfleri tek tek yazılır
  
 if(!enteredLetter) //boş olması false olarak algılanır eğer boş ise false olur ve !false = true olur ve 'pending' döner
 {
   return 'pending';
 }

 return randomLetter ===  enteredLetter ? "correct": "incorrect";
 // eğer eşitlerse 'correct' classı devreye girer değilseler 'incorrect' classı devreye girer.

  }
  
}
