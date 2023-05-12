import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuPage } from './ou.page';

const routes: Routes = [
  {
    path: '',
    component: OuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuPageRoutingModule {}
