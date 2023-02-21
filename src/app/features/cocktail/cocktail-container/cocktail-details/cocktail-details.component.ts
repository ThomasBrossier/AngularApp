import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../../../../shared/interfaces/cocktail.interface";
import {PanierService} from "../../../../shared/services/panier.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CocktailService} from "../../../../shared/services/cocktail.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail | null;
  public subscription?: Subscription;
  constructor(private panierService: PanierService,private cocktailService: CocktailService,  private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() :void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      if(this.subscription){
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService.getCocktail(+paramMap.get('index')!)?.subscribe((cocktail: Cocktail)=>{
        this.cocktail = cocktail;
      })
    })
  }
  ngOnDestroy() :void {
    this.subscription?.unsubscribe();
  }

  public  addToPanier():void{
    this.panierService.addToPanier(this.cocktail!.ingredients)
  }
}
