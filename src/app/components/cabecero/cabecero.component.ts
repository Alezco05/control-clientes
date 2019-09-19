import { Component, OnInit } from '@angular/core';
import { faUser,faCog } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  faUser = faUser;
  faCog = faCog;
  constructor() { }

  ngOnInit() {
  }

}
