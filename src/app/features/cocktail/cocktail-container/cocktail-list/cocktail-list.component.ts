import {Component, Input} from '@angular/core';
import {Cocktail} from "../../../../shared/interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  @Input() public cocktails!: Cocktail[] | null;
  public search = '';
}
