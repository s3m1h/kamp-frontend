import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tpyescript de veri türü : ile veriliyor
  title: string = 'northwind';
  user: string = 'semih acar';
  // veri türü any herşey olabilir anlamına geliyor
  
}
