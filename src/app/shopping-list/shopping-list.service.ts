import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ]

  constructor(private http: HttpClient) {}

  getIngredient(id: number) {
    return this.ingredients[id]
  }

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

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  storeShoppingList() {
    return this.http.put(
      'https://recipe-shop-1c62a.firebaseio.com/shopping-list.json',
      this.ingredients
    )
  }

  fetchShoppingList() {
    this.http
      .get('https://recipe-shop-1c62a.firebaseio.com/shopping-list.json')
      .subscribe((ingres: Ingredient[]) => {
        console.log(ingres)
        this.ingredients = ingres
        this.ingredientsChanged.next(this.getIngredients())
      })
  }
}
