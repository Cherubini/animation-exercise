import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hideShow', [

      state('hide', style({
        opacity: 0,
        left: 'calc(40px - 100vw)'
      })),

      state('show', style({
        opacity: 1,
        left: '10px'
      })),

      transition('hide => show',[
        animate('1s')
      ]),

      transition('show => hide', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'animation-exercise';
  isShow = false;

  show(){
    this.isShow=!this.isShow;
  }
}
