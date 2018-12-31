import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { initializeApp } from 'firebase'
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'recipe-shop'

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    initializeApp({
      apiKey: 'AIzaSyBMZ34b4WsLBe5aXQvkPQ3AusWGk9-fTzw',
      authDomain: 'recipe-shop-1c62a.firebaseapp.com',
    })

    // this.authService
    //   .checkInitToken()
    //   .then((token: string) => (this.authService.token = token))
  }
}
