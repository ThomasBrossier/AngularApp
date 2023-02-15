import { Component } from '@angular/core';
import {Cocktail} from "../interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: "Mojito",
      image: "https://assets.afcdn.com/recipe/20180705/80345_w1024h1024c1cx4150cy1741.webp",
      description: "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français[réf. nécessaire], est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un emblème exotique international). ",
    },
    {
      name: "Bloody Mary",
      image: "https://www.liquor.com/thmb/FJsfsKERQS_Yd8PjetW9nDZyx4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bloody-mary-720x720-primary-28cf1aaa79d0424d951901fcc0a42e91.jpg",
      description: "Le Bloody Mary (littéralement « Marie la sanguinaire »1) est un cocktail plus ou moins fortement pimenté et épicé selon les goûts, à base de vodka, de jus de tomate, de jus de citron et d'épices telles que piment, sauce Tabasco, sauce Worcestershire, poivre, sel au céleri… ",
    },
    {
      name: "Ti-Punch",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ti-punch_009.jpg/1280px-Ti-punch_009.jpg",
      description: "Le ti-punch ou ti-ponch (signifiant « petit punch » en créole antillais, guyanais, réunionnais ou haïtien) est un cocktail à base de rhum, de citron vert, et de sirop de batterie, de sucre roux de canne, ou sirop de canne à sucre1. Variante des punch, mojito, daïquiri, cuba libre, caïpirinha, et caïpiroska, il est un cocktail-apéritif traditionnel festif, et une institution sociale emblématique des cuisines antillaise2, guyanaise, réunionnaise, et haïtienne.",
    }
  ]
}
