import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipesComponent } from './recipes/recipes.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
