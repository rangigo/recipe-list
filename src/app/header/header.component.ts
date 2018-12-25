import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navClicked = new EventEmitter<string>()

  
  constructor() { }

  ngOnInit(): void { }

  onClickNav(ev: Event) {
    // console.log(ev.srcElement.textContent)
    this.navClicked.emit(ev.srcElement.textContent)
  }
}
