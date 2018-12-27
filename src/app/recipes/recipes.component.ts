import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'
import { RecipesService } from './recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.selectRecipe.subscribe(
      (selectedRecipe: Recipe) => (this.selectedRecipe = selectedRecipe)
    )
  }
}
