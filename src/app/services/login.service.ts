import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AngularFireAuth) { }

  login(email:string, password:string){
    return new Promise((resolve,reject)=>{
      this.authService.auth.signInWithEmailAndPassword(email,password)
      .then(data => resolve(data),
      error => reject(error))

    })
  }
  getAuth(){
    return this.authService.authState.pipe(
      map(auth => auth)
    );
  }
  logout(){
    return this.authService.auth.signOut();
  }
  registro(email:string, password:string){
    return new Promise((resolve,reject)=>{
      this.authService.auth.createUserWithEmailAndPassword(email,password)
      .then(data => resolve(data),
      error => reject(error))
    })
  }
}
