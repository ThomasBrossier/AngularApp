import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailFormComponent} from "./cocktail-container/cocktail-form/cocktail-form.component";

import {FilterPipe} from "../../shared/pipe/filter.pipe";

import {COCKTAIL_ROUTES} from "./cocktail.routes";



@NgModule({
  declarations: [
    FilterPipe,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(COCKTAIL_ROUTES)
  ]
})
export class CocktailModule { }
