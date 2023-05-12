import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HnPageRoutingModule } from './hn-routing.module';

import { HnPage } from './hn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HnPageRoutingModule
  ],
  declarations: [HnPage]
})
export class HnPageModule {}
