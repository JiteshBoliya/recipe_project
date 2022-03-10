import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mydate: Date;
  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
  }
  onSave(){
    this.recipeService.storeRecipe();
  }
  onFatch(){
    this.recipeService.fatchRecipe();
  }
}
