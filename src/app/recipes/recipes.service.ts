import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a test desc.',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b'
    ),
    new Recipe(
      'Test recipe 2',
      'This is a test desc. 2',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b'
    ),
  ]
  selectRecipe = new EventEmitter<Recipe>()

  getRecipes () {
    return this.recipes.slice()
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }
}