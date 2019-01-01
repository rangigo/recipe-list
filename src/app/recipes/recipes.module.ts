import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RecipesComponent } from './recipes.component'
import { RecipeStartComponent } from './recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RecipesRoutingModule } from './recipes-routing.module'
import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from '../auth/auth-guard.service'

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [AuthGuard],
})
export class RecipesModule {}
