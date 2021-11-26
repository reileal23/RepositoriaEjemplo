import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmuerzoCenaPage } from './almuerzo-cena.page';

const routes: Routes = [
  {
    path: '',
    component: AlmuerzoCenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmuerzoCenaPageRoutingModule {}
