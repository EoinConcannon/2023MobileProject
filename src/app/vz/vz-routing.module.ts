import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VzPage } from './vz.page';

const routes: Routes = [
  {
    path: '',
    component: VzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VzPageRoutingModule {}
