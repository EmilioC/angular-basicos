import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-pesonajes',
  templateUrl: './pesonajes.component.html',
  styles: [
  ]
})
export class PesonajesComponent {

  @Input() personajes: Personaje[] =[];

}
