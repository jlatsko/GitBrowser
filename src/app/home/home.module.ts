import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
  log(x) { console.log('Heres your event: ' + x); }
}
