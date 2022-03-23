import { state } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import * as ShoppingListActions from '../store/shopping-list.actions'
import * as ShoppingList from '../store/shopping-list.reducer'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  // editedItemIndex: number;
  edititem: Ingredient;
  constructor(
    private slService: ShoppingListService,
    private store: Store<ShoppingList.AppState>
  ) { }

  ngOnInit(): void {
   
    this.store.select('ShoppingList').subscribe(stateData=> {
      if(stateData.esditedIngredienteIndex > -1){
        this.editMode=true;
         this.edititem=stateData.editedIngrediente;
        this.slForm.setValue({
          name:this.edititem.name,
          amount:this.edititem.amount   
        });
      }else{
        this.editMode=false;   
      }
    })



    // this.subscription = this.slService.stratedEditing
    //   .subscribe(
    //     (index: number) => {
    //       this.editMode = true;
    //       this.editedItemIndex = index;
    //       this.edititem = this.slService.getIngredients(index);
    //       this.slForm.setValue({
    //         name: this.edititem.name,
    //         amount: this.edititem.amount,
    //       })
    //     }
    //   );
  }
  onAddItem(form: NgForm): void {
    const value = form.value;
    const newingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      //  this.slService.updateIngredient(this.editedItemIndex,newingredient);
       this.store.dispatch(new ShoppingListActions.UpdateIngredient(newingredient))
    } else {
       this.slService.addIngredient(newingredient);
       this.store.dispatch(new ShoppingListActions.AddIngredient(newingredient))
    }
    this.slForm.reset();
    this.editMode = false;
  }
  onclear() {
    this.slForm.reset();
    this.editMode = true;

  }
  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onclear()

  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
