import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subscribe: Subscription;
  constructor(private recipeService:RecipeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipeService.recipechanged
    .subscribe(
      (recipe: Recipe[]) => {
        this.recipes=recipe;
      }
    )
    this.recipes = this.recipeService.getRecipe();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
  // ngOnDestroy(): void {
  //   this.subscribe.unsubscribe();
  // }
}