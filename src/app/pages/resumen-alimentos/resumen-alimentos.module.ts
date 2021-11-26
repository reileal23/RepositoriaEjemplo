import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenAlimentosPageRoutingModule } from './resumen-alimentos-routing.module';

import { ResumenAlimentosPage } from './resumen-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenAlimentosPageRoutingModule
  ],
  declarations: [ResumenAlimentosPage]
})
export class ResumenAlimentosPageModule {}
