import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My-First-NG-App';
  message:string = "Hello my friend!";
  city:string = "Ankara";
}
