import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { GitShowComponent } from './components/git-show/git-show.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GitShowComponent,
    DaysAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
