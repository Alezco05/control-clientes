import { Component, OnInit } from "@angular/core";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { LoginService } from "src/app/services/login.service";
import { timeout } from "q";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  faClipboardList = faClipboardList;
  email: string;
  password: string;
  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) this.router.navigate(["/"]);
    });
  }
  registrar() {
    this.loginService
      .registro(this.email, this.password)
      .then(res => {
        this.router.navigate(["/"]);
      })
      .catch(error =>
        this.flashMessages.show(error.message, {
          cssClass: "alert-danger",
          timeout: 4000
        })
      );
  }
}
