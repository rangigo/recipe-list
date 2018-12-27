import { Injectable, EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingre: Ingredient) {
    this.ingredients.push(ingre)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingres: Ingredient[]) {
    this.ingredients.push(...ingres)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
