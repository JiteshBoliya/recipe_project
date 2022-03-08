import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  
  constructor(private slService:ShoppingListService) { }
  
  ngOnInit(): void {
    this.subscription=this.slService.stratedEditing
    .subscribe(
      (index:number)=>{
          this.editMode=true;
          this.editedItemIndex=index;
      }
    );
  }
  onAddItem(form:NgForm): void {
    const value=form.value;
    const newingredient = new Ingredient(value.name,value.amount);
    this.slService.addIngredient(newingredient);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
