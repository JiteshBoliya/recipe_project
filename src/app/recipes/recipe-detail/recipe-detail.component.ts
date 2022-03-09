import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, provideRoutes, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  mydate: Date;
  
  constructor(private recipeService: RecipeService,private router: ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    this.router.params.subscribe((params:Params) => {
      this.id= +params['id'];
      this.recipe= this.recipeService.getrec(this.id);
    });
  }
  addToShoppingList(){
    this.recipeService.addIngredienttoshopping(this.recipe.ingredient);
  }
  onDelete(){
    this.recipeService.deleteRecipes(this.id);
    this.route.navigate(['/recipes']);
  }
}

