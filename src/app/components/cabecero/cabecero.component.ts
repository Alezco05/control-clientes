import { Component, OnInit } from '@angular/core';
import { faUser,faCog,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  faUser = faUser;
  faCog = faCog;
  faSignInAlt = faSignInAlt;
  constructor() { }

  ngOnInit() {
  }

}
