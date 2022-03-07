import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameinputref: ElementRef;
  @ViewChild('amountinput') amountinputref: ElementRef;

  constructor(private slService:ShoppingListService) { }
  
  ngOnInit(): void {
  }
  onAddItem(): void {
    const inName= this.nameinputref.nativeElement.value;
    const inAmount= this.amountinputref.nativeElement.value;
    const newingredient = new Ingredient(inName,inAmount);
    this.slService.addIngredient(newingredient);
  }
}
