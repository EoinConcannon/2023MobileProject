import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HnPage } from './hn.page';

const routes: Routes = [
  {
    path: '',
    component: HnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HnPageRoutingModule {}
