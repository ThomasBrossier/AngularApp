// Modules
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

// Pipes
import { FilterPipe } from './shared/pipe/filter.pipe';

// Composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';

// Routes
import {APP_ROUTES} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule, FormsModule, RouterModule.forRoot(APP_ROUTES), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
