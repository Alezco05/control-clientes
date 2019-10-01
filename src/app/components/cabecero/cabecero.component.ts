import { Component, OnInit } from '@angular/core';
import { faUser,faCog,faSignInAlt,faSignOutAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  faUser = faUser;
  faCog = faCog;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  isLoggedIn:boolean;
  loggenInUser: string;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth) {this.isLoggedIn = true; this.loggenInUser = auth.email;}
      else this.isLoggedIn = false;
    })
  }
  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
