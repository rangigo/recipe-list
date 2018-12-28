import { Component, OnInit, Input } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  id: number

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => (this.id = +params['id']))
    this.recipe = this.recipesService.getRecipe(this.id)
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToSL(this.recipe.ingredients)
  }
}
