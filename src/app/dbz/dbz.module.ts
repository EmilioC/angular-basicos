import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PesonajesComponent } from './pesonajes/pesonajes.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PesonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
