import { Injectable, EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a test desc.',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b',
      [new Ingredient('Meat', 1), new Ingredient('Mushrooms', 2)]
    ),
    new Recipe(
      'Test recipe 2',
      'This is a test desc. 2',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b',
      [new Ingredient('Meat', 2), new Ingredient('Onions', 4)]
    ),
  ]
  selectRecipe = new EventEmitter<Recipe>()

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
