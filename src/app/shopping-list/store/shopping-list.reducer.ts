// import { Action } from "@ngrx/store";
// import { Ingredient } from "../../shared/ingredient.model";
// import * as ShoppingListActions from "./shopping-list.action";

// const initialState={
//     ingredinate:[
//         new Ingredient('Apple',5),
//         new Ingredient('totameto',10),
//     ]
// };

// export function shoppingListReducer(
//     state=initialState,
//     action:ShoppingListActions.AddIngredient)
//     {
//       switch(action.type){
//           case ShoppingListActions.ADD_INGREDIENT:
//               return{ 
//                   ...state,
//                   ingredinate:[...state.ingredinate,action.payload]
//               };
//       }
// }
