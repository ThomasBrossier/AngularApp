import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {CocktailService} from "../shared/services/cocktail.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit, OnDestroy{
  public cocktails!: Cocktail[]
  public selectedCocktail!: Cocktail;
  public subscription: Subscription = new Subscription();
  public ngOnInit() :void{
    this.subscription.add(this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[])=>{
        this.cocktails = cocktails;
      }
    ))
    this.subscription.add(this.cocktailService.selectedCocktail$.subscribe((cocktail: Cocktail)=>{
      this.selectedCocktail = cocktail;
    }))
  }
  public ngOnDestroy() :void{
    this.subscription.unsubscribe();
  }
  public selectCocktail(index: number):void{
    this.cocktailService.selectCocktail(index);
  }
  constructor(private cocktailService: CocktailService) {

  }
}
