import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VzPageRoutingModule } from './vz-routing.module';

import { VzPage } from './vz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VzPageRoutingModule
  ],
  declarations: [VzPage]
})
export class VzPageModule {}
