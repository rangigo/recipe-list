import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingre: Ingredient) {
    this.ingredients.push(ingre)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingres: Ingredient[]) {
    this.ingredients.push(...ingres)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
