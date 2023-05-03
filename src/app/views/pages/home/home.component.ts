import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      display: flex;
      justify-content: center
    }
    h3{
      text-align: center;
      color: #333;
      font-size: 30px;
      line-height: 1.5;
    }
    `
  ]
})
export class HomeComponent {

  public customDate: Date = new Date();

}
