import { Injectable } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

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

  constructor(private slService: ShoppingListService) {}

  getRecipe(id: number) {
    return this.recipes[id]
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  addIngredientsToSL(ingres: Ingredient[]) {
    this.slService.addIngredients(ingres)
  }
}
