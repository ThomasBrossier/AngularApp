import {Ingredient} from "./ingredients.interface";

export interface Cocktail{
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
}
