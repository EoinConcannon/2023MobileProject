import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgPage } from './ag.page';

const routes: Routes = [
  {
    path: '',
    component: AgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgPageRoutingModule {}
