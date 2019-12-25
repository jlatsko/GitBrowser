import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {GitRepoService} from './shared/services/git-repo.service';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
