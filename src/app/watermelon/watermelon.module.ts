import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatermelonPageRoutingModule } from './watermelon-routing.module';

import { WatermelonPage } from './watermelon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatermelonPageRoutingModule
  ],
  declarations: [WatermelonPage]
})
export class WatermelonPageModule {}
