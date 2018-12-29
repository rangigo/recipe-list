import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  ViewChild,
  OnDestroy,
} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true
        this.editedItemIndex = id
        this.editedItem = this.shoppingListService.getIngredient(
          this.editedItemIndex
        )
        this.shopForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }

  onSubmit() {
    console.log(this.shopForm.value)
    const newIngre = new Ingredient(
      this.shopForm.value.name,
      this.shopForm.value.amount
    )

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngre)
    } else this.shoppingListService.addIngredient(newIngre)
    this.editMode = false
    this.shopForm.reset()
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
 
  onClear() {
    this.shopForm.reset()
    this.editMode = false
  }

  // onDeleteIngredient() {
  //   this.ingredientDeleted.emit({
  //     name: this.ingredientName,
  //     amount: this.ingredientAmount,
  //   })
  // }
}
