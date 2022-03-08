import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private router: ActivatedRoute,private recipeService: RecipeService) { }

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

    if(this.editMode){
      const recipe= this.recipeService.getrec(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description; 
    }
    this.recipeForm= new FormGroup({
      'name': new FormControl(recipeName),
      'imgagepath':new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });


  }

}
