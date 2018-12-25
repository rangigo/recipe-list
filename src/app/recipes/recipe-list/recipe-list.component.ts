import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a test desc.',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b'
    ),
    new Recipe(
      'Test recipe',
      'This is a test desc.',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b'
    ),
  ]

  constructor() {}

  ngOnInit() {}
}
