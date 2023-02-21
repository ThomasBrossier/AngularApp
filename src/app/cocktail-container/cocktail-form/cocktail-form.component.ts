import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {CocktailService} from "../../shared/services/cocktail.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {first} from "rxjs";

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
 public cocktailForm!: FormGroup;
 public cocktail!: Cocktail | null;
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
       this.cocktailService.getCocktail(+index)
         ?.pipe(first(x => !!x ))
         .subscribe((cocktail: Cocktail)=>{
         this.cocktail = cocktail;
         this.cocktailForm = this.initForm(this.cocktail);
       });
     }else{
       this.cocktailForm = this.initForm();
     }
   })
 }

 private initForm(cocktail: Cocktail | null = {name:'', description:'',image:'', ingredients:[]}) : FormGroup{
    return this.fb.group({
     name: [cocktail!.name, Validators.required],
     image:[cocktail!.image, Validators.required],
     description: [cocktail!.description,Validators.required],
     ingredients: this.fb.array(cocktail!.ingredients.map(ingredient => this.fb.group({name: [ingredient.name, Validators.required], quantity: [ingredient.quantity, Validators.required]})), Validators.required)
   })
 }
 public addIngredient(): void{
   this.ingredients.push(this.fb.group({
     name:['', Validators.required],
     quantity:[0, Validators.required]
   }))
 }

 public submit(): void{
   if(this.cocktail?._id){
      this.cocktailService.editCocktail(this.cocktail._id ,this.cocktailForm.value).subscribe()
   }else{
     this.cocktailService.addCocktail(this.cocktailForm.value).subscribe()
   }
   this.router.navigate(['..'], { relativeTo : this.activatedRoute});
 }
}
