import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {JournalService} from './services/journal.service';
import {  EntryListComponent } from './entry-list/entry-list.component';

import { Routes, RouterModule } from '@angular/router';

const routes = [
  {path: 'entry-list', component:  EntryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
