import { Component } from '@angular/core';
import {Cocktail} from "../interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: "Mojito",
    image: "https://assets.afcdn.com/recipe/20180705/80345_w1024h1024c1cx4150cy1741.webp",
    description: "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français[réf. nécessaire], est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un emblème exotique international). ",
  }
}
