import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookDetailsComponent  } from "./component/book-details/book-details.component";
import { AuthorDetailsComponent  } from "./component/author-details/author-details.component";
import { EditorialDetailsComponent  } from "./component/editorial-details/editorial-details.component";
import { HomeComponent  } from "./component/home/home.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'book', component: BookDetailsComponent },
    { path: 'autor', component: AuthorDetailsComponent },
    { path: 'editorial', component: EditorialDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
