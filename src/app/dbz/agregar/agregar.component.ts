import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor ( private DbzService: DbzService){}

  // @Output() onNuevopersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar( ){
  if (this.nuevo.nombre.trim().length === 0){ return; }

  console.log( this.nuevo )
 // this.onNuevopersonaje.emit( this.nuevo );
 this.DbzService.agregarPersonaje( this.nuevo )

  this.nuevo = {
    nombre: '',
    poder: 0
    }
  }

}
