// Modules
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CocktailModule} from "./features/cocktail/cocktail.module";
import {PanierModule} from "./features/panier/panier.module";
import {RouterModule} from "@angular/router";

// Composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Routes
import {APP_ROUTES} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    CocktailModule,
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
