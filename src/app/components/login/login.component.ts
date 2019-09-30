import { Component, OnInit } from '@angular/core';
import {faClipboard} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faClipboard = faClipboard;
  email:string;
  password:string;
  constructor(private router:Router, private flashMessage:FlashMessagesService ) { }

  ngOnInit() {
  }
  login(){
    console.log("Login");
  }
}
