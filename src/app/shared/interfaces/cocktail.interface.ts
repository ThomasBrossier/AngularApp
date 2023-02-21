import {Ingredient} from "./ingredients.interface";

export interface Cocktail{
  _id?: string;
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
}
