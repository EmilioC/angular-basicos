import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})

export class PersonajesComponent {

  get personajes (){
    return this.DbzService.personajes;
  }

  constructor( private DbzService: DbzService){}
}
