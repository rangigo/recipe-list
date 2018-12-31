import { Injectable } from '@angular/core'
import { Recipe } from './recipe.model'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'Katsudon',
      'Best fucking dish!',
      'https://cooksmarts.imgix.net/meal_photos/844/20170306-Katsudon-NM-2.jpg?ixlib=rails-2.1.4&w=500&dpr=3',
      [new Ingredient('Chicken', 4), new Ingredient('Breadcrumbs', 1)]
    ),
    new Recipe(
      'Tempura',
      'I love tempura',
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/Basic-tempura.jpg',
      [new Ingredient('Shrimp', 2), new Ingredient('Veggie', 4)]
    ),
  ]

  recipesChanged = new Subject<Recipe[]>()

  constructor(
    private slService: ShoppingListService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getRecipe(id: number) {
    return this.recipes[id]
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1)
    this.recipesChanged.next(this.recipes.slice())
  }

  addIngredientsToSL(ingres: Ingredient[]) {
    this.slService.addIngredients(ingres)
    this.recipesChanged.next(this.recipes.slice())
  }

  storeRecipes() {
    const token = this.authService.getToken()

    return this.http.put(
      'https://recipe-shop-1c62a.firebaseio.com/recipes.json?auth=' + token,
      this.recipes
    )
  }

  fetchRecipes() {
    const token = this.authService.getToken()

    this.http
      .get(
        'https://recipe-shop-1c62a.firebaseio.com/recipes.json?auth=' + token
      )
      .subscribe(
        (recipes: Recipe[]) => {
          // recipes.forEach(recipe => {
          //   if (!recipe['ingredients']) {
          //     recipe['ingredients'] = []
          //   }
          // })
          this.recipes = recipes
          console.log(recipes)
          this.recipesChanged.next(this.recipes.slice())
        },
        err => console.log(err)
      )
  }
}
