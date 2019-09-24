import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import {faUser,faArrowLeft,faCheck,faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };
  id: string;
  faUser = faUser;
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  faTrash = faTrash;
  constructor(private clientesServicio: ClienteService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.clientesServicio.getCliente(this.id).subscribe(
      cliente => {this.cliente = cliente;},
      error => console.log(error)
    );
    console.log(this.cliente)
  }
  guardar(form){
    console.log(form);
  }
  eliminar(){
    console.log(eliminar)
  }

}
