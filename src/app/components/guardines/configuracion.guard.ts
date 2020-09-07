import { CanActivate, Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private router: Router,
        private configuracionServicio: ConfiguracionService
    ){}

    canActivate(): Observable<boolean>{
        return this.configuracionServicio.getConfiguracion().pipe(
            map( configuracion => {
                if(configuracion.permitirRegistro){
                    return true;
                }
                else{
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
}