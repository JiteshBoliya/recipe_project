import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";
export interface ShoppingListState {
    ingrediente: Ingredient[];
    editedIngrediente: Ingredient;
    esditedIngredienteIndex: number;
}
export interface AppState {
    ShoppingList: ShoppingListState;
}

const initialState: ShoppingListState = {
    ingrediente: [
        new Ingredient('Apples', 5),
        new Ingredient("Tomatoes", 4),
    ],
    editedIngrediente: null,
    esditedIngredienteIndex: -1
};

export function shoppingListReducer(
    state: ShoppingListState = initialState,
    action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingrediente: [...state.ingrediente, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingrediente: [...state.ingrediente, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingrediente[state.esditedIngredienteIndex];
            const upadateIngredient = {
                ...ingredient,
                ...action.payload
            };
            const upadateIngredients = [...state.ingrediente]
            upadateIngredients[state.esditedIngredienteIndex] = upadateIngredient
            return {
                ...state,
                ingrediente: upadateIngredients,
                editedIngrediente: null,
                esditedIngredienteIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingrediente: state.ingrediente.filter((ig, igindex) => {
                    return igindex !== state.esditedIngredienteIndex;
                }),
                editedIngrediente: null,
                esditedIngredienteIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                esditedIngredienteIndex:action.payload,
                editedIngrediente:{...state.ingrediente[action.payload]}
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngrediente:null,
                esditedIngredienteIndex:-1   
            };
         default:
            return state;
    }
}