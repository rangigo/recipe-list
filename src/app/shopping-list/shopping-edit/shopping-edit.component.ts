import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string
  ingredientAmount: number

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.ingredientName, this.ingredientAmount)
    )
  }

  // onDeleteIngredient() {
  //   this.ingredientDeleted.emit({
  //     name: this.ingredientName,
  //     amount: this.ingredientAmount,
  //   })
  // }
}
