import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  edititem:Ingredient;
  constructor(private slService:ShoppingListService) { }
  
  ngOnInit(): void {
    this.subscription=this.slService.stratedEditing
    .subscribe(
      (index:number)=>{
          this.editMode=true;
          this.editedItemIndex=index;
          this.edititem = this.slService.getIngredients(index);
          this.slForm.setValue({
            name: this.edititem.name,
            amount: this.edititem.amount,
          })  
        }
    );
  }
  onAddItem(form:NgForm): void {
    const value=form.value;
    const newingredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newingredient);
    }else{
      this.slService.addIngredient(newingredient);
    }
    this.slForm.reset();
    this.editMode=false;
  }
  onclear(){   
    this.slForm.reset();
    this.editMode=true;
  }
  onDelete(){ 
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onclear()
  
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
