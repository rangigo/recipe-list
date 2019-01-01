import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { RecipesComponent } from './recipes.component'
import { RecipeStartComponent } from './recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { AuthGuard } from '../auth/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
