import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuPageRoutingModule } from './ou-routing.module';

import { OuPage } from './ou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OuPageRoutingModule
  ],
  declarations: [OuPage]
})
export class OuPageModule {}
