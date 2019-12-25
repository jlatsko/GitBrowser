import {Component} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

/**
 * testing flex-layout for RWD (responsive web design)
 */
@Component({
  selector : 'app-root',
  // styles: [`
  //   .parent {height: 100px;}
  //   .left   {background-color: cyan;}
  //   .right  {background-color: yellow;}
  // `],
  // template: `
  //     <div class="parent" *ngIf="mediaObserver.isActive('xs')">
  //       Only shown if on mobile viewport sizes
  //     </div>
  //     <div class="parent" fxLayout="row"
  //          fxLayout.lt-md="column">
  //       <div fxFlex="30%" class="left">Left</div>
  //       <div fxFlex="70%" class="right">Right</div>
  //     </div>
  //  `
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GitBrowser';
  constructor(public mediaObserver: MediaObserver) { }
}
