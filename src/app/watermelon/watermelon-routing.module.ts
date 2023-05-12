import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatermelonPage } from './watermelon.page';

const routes: Routes = [
  {
    path: '',
    component: WatermelonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatermelonPageRoutingModule {}
