import { Component, OnInit } from "@angular/core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  faClipboard = faClipboard;
  email: string;
  password: string;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth) this.router.navigate(['/']);
    })
  }
  login() {
    this.loginService
      .login(this.email, this.password)
      .then(res => {
        this.router.navigate(["/"]);
      })
      .catch(error => {
        this.flashMessage.show(error.message, {
          cssClass: "alert-danger",
          timeout: 4000
        });
      });
  }
}
