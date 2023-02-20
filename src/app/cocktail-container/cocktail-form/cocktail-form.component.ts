import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {CocktailService} from "../../shared/services/cocktail.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Cocktail} from "../../shared/interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
 public cocktailForm!: FormGroup;
 public cocktail!: Cocktail;
 public get ingredients(): FormArray {
   return this.cocktailForm.get('ingredients') as FormArray;
 }
 constructor(private fb: FormBuilder,
             private cocktailService: CocktailService,
             private router: Router,
             private activatedRoute: ActivatedRoute) {
 }

 public ngOnInit() :void {
   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
     // @ts-ignore
     const index = paramMap.get('index');
     if(index !== null ){
       this.cocktail = this.cocktailService.getCocktail(+index);
     }
   })
   this.initForm(this.cocktail);
 }

 private initForm(cocktail: Cocktail = {name:'', description:'',image:'', ingredients:[]}) : void{
   this.cocktailForm = this.fb.group({
     name: [cocktail.name, Validators.required],
     image:[cocktail.image, Validators.required],
     description: [cocktail.description,Validators.required],
     ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({name: [ingredient.name, Validators.required], quantity: [ingredient.quantity, Validators.required]})), Validators.required)
   })
 }
 public addIngredient(): void{
   this.ingredients.push(this.fb.group({
     name:['', Validators.required],
     quantity:[0, Validators.required]
   }))
 }

 public submit(): void{
   if(this.cocktail){
      this.cocktailService.editCocktail(this.cocktailForm.value)
   }else{
     this.cocktailService.addCocktail(this.cocktailForm.value)
   }
   this.router.navigate(['..'], { relativeTo : this.activatedRoute});
 }
}
