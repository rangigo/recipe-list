import { Directive, HostBinding, HostListener, OnInit } from '@angular/core'

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false

  constructor() {}

  ngOnInit() {}

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen
  }
}
