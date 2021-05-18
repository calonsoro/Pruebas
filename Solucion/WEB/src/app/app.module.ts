import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookDetailFormComponent } from './component/book-details/book-detail-form/book-detail-form.component';

import { EditorialDetailsComponent } from './component/editorial-details/editorial-details.component';
import { EditorialDetailFormComponent } from './component/editorial-details/editorial-detail-form/editorial-detail-form.component';

import { AuthorDetailsComponent } from './component/author-details/author-details.component';
import { AuthorDetailFormComponent } from './component/author-details/author-detail-form/author-detail-form.component';

import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING  } from "./app.routes";
import { NavbarComponent } from './component/navbar/navbar.component';

import {DatePipe} from '@angular/common';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookDetailFormComponent,
    EditorialDetailsComponent,
    EditorialDetailFormComponent,
    AuthorDetailsComponent,
    AuthorDetailFormComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    APP_ROUTING
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  
    
})
export class AppModule { }
