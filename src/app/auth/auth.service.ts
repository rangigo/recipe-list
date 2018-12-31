import { Injectable } from '@angular/core'
import { auth } from 'firebase'

@Injectable()
export class AuthService {
  token: string

  signupUser(email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err))
  }

  signinUser(emai: string, password: string) {
    auth()
      .signInWithEmailAndPassword(emai, password)
      .then(res => {
        auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token))
      })
      .catch(err => console.log(err))
  }

  getToken() {
    return this.token
  }
}
