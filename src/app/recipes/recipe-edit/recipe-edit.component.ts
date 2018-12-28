import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode: boolean = false

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] !== null
      console.log(this.editMode)
    })
  }
}
