import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { RecipesService } from '../recipes.service'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode: boolean = false
  recipeForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      // console.log(this.editMode, params['id'])
      let name: string = '',
        imgPath: string = '',
        desc: string = '',
        recipeIngres: FormArray = new FormArray([])

      if (this.editMode) {
        const currentRecipe = this.recipesService.getRecipe(this.id)
        name = currentRecipe.name
        imgPath = currentRecipe.imgPath
        desc = currentRecipe.desc
        if (currentRecipe['ingredients']) {
          currentRecipe['ingredients'].forEach(ingre => {
            recipeIngres.push(
              new FormGroup({
                name: new FormControl(ingre.name, Validators.required),
                amount: new FormControl(ingre.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/),
                ]),
              })
            )
          })
        }
      }
      this.recipeForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        imgPath: new FormControl(imgPath, Validators.required),
        desc: new FormControl(desc, Validators.required),
        ingredients: recipeIngres,
      })
    })
  }

  onSubmit() {
    const value = this.recipeForm.value
    // console.log(value.ingredients)
    const newRecipe = new Recipe(
      value.name,
      value.desc,
      value.imgPath,
      value.ingredients
    )
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, newRecipe)
      this.router.navigate(['recipes', this.id])
    } else {
      this.recipesService.addRecipe(newRecipe)
      this.router.navigate(['recipes', this.recipesService.recipes.length - 1])
    }
  }

  onAddIngredient() {
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    })
    ;(<FormArray>this.recipeForm.get('ingredients')).push(control)
  }

  onCancel() {
    this.recipeForm.reset()
    if (this.editMode) {
      this.router.navigate(['recipes', this.id])
    } else this.router.navigate(['recipes'])
  }

  onDeleteIngredient(id: number) {
    ;(<FormArray>this.recipeForm.get('ingredients')).removeAt(id)
  }
}
