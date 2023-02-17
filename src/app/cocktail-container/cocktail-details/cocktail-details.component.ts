import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {PanierService} from "../../shared/services/panier.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;
  constructor(private panierService: PanierService,private cocktailService: CocktailService,  private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() :void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{

      // @ts-ignore
      this.cocktail = this.cocktailService.getCocktail(+paramMap.get('index'))
    })
  }

  public  addToPanier():void{
    this.panierService.addToPanier(this.cocktail.ingredients)
  }
}
