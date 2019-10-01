import { Component, OnInit } from '@angular/core';

import {faWrench,faArrowLeft,faCheck} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import {Configuracion} from 'src/app/models/configuracion.model';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faWrench = faWrench;
  faCheck = faCheck;
  permitirRegistro:boolean = false;
  constructor(
    private router:Router,
    private configuracionServicio: ConfiguracionService
  ) { }

  ngOnInit() {
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion:Configuracion) => this.permitirRegistro = configuracion.permitirRegistro
      )
  }
  guardar(){
    const configuracion = {permitirRegistro:this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
