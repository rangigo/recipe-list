import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @Output() ingredientDeleted = new EventEmitter<Ingredient>()
  ingredientName: string
  ingredientAmount: number

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    this.ingredientAdded.emit({
      name: this.ingredientName,
      amount: this.ingredientAmount,
    })
  }

  onDeleteIngredient() {
    this.ingredientDeleted.emit({
      name: this.ingredientName,
      amount: this.ingredientAmount,
    })
  }
}
