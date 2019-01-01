import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { SharedModule } from '../shared/shared.module'
import { AppRoutingModule } from '../app-routing.module'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { RecipesService } from '../recipes/recipes.service'
import { AuthService } from '../auth/auth.service'

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [ShoppingListService, RecipesService, AuthService],
})
export class CoreModule {}
