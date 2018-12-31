import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipesComponent } from './recipes/recipes.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
