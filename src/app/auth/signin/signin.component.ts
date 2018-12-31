import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignin(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password)
  }
}
