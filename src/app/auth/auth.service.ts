import { Injectable } from '@angular/core'
import { auth } from 'firebase'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  token: string

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err))
  }

  signinUser(emai: string, password: string) {
    auth()
      .signInWithEmailAndPassword(emai, password)
      .then(res => {
        this.router.navigate(['/'])
        auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token))
      })
      .catch(err => console.log(err))
  }

  logout() {
    auth().signOut()
    this.token = null
    this.router.navigate(['/'])
  }

  getToken() {
    return this.token
  }

  isAuthenticated() {
    return this.token != null
  }

  // checkInitToken() {
  //   return auth().currentUser.getIdToken()
  // }
}
