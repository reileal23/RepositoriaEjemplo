import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmuerzoCenaPageRoutingModule } from './almuerzo-cena-routing.module';

import { AlmuerzoCenaPage } from './almuerzo-cena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmuerzoCenaPageRoutingModule
  ],
  declarations: [AlmuerzoCenaPage]
})
export class AlmuerzoCenaPageModule {}
