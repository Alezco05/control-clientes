import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { faPlus,faAngleDoubleRight,faUsers } from '@fortawesome/free-solid-svg-icons';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  faPlus = faPlus;
  faAngleDoubleRight = faAngleDoubleRight;
  faUsers = faUsers;
  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };
  @ViewChild("clienteForm",{static: false}) clienteForm: NgForm;
  @ViewChild("botonCerrar",{static: false}) botonCerrar: ElementRef; 

  constructor(private clientesServicio: ClienteService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      response => {
        this.clientes = response;
      },
      error => console.log(error)
    );
  }
  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }
  agregar({value,valid}:{value:Cliente,valid: boolean}){
    if(!valid){
      this.flashMessage.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 3000
      });
    }
    else{
      //Agregamos el nuevo cliente
      this.clientesServicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }
}
