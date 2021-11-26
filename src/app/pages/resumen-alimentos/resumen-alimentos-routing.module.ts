import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenAlimentosPage } from './resumen-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenAlimentosPageRoutingModule {}
