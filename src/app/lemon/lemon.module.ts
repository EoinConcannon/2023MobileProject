import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemonPageRoutingModule } from './lemon-routing.module';

import { LemonPage } from './lemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemonPageRoutingModule
  ],
  declarations: [LemonPage]
})
export class LemonPageModule {}
