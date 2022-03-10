import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm: FormGroup;

  constructor(private router: ActivatedRoute,private recipeService: RecipeService,
              private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
        this.editMode = params['id']!=null;
        this.id= +params['id'];
        console.log(this.id);
        this.initForm();       
    });
  }
  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients= new FormArray([]);

    if(this.editMode){
      const recipe= this.recipeService.getrec(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredient']){
        for(let ingredient of recipe.ingredient){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      } 
    }
    this.recipeForm= new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imgpath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    });
  }
  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  onAddIngredinent(){
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
      )
    }
    onCancel(){
      this.route.navigate(['../'],{relativeTo:this.router})
    }
    onSubmit(){
      const newrec=new Recipe(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imgpath'],
        this.recipeForm.value['ingredients']
      );      
      if(this.editMode){
        this.recipeService.updateResipe(this.id,newrec);
      }
      else{
        this.recipeService.addRecipe(newrec);
      }
     this.onCancel();
    }
    onDelete(index:number){
      (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
    }
  
}
