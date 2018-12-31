import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { RecipesService } from '../recipes/recipes.service'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private slService: ShoppingListService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSaveData() {
    this.recipesService
      .storeRecipes()
      .subscribe(res => console.log(res), err => console.log(err))
    this.slService
      .storeShoppingList()
      .subscribe(res => console.log(res), err => console.log(err))
  }

  onFetchData() {
    this.recipesService.fetchRecipes()
    this.slService.fetchShoppingList()
  }

  onLogout() {
    this.authService.logout()
  }
}
