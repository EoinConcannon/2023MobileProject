import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgPageRoutingModule } from './ag-routing.module';

import { AgPage } from './ag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgPageRoutingModule
  ],
  declarations: [AgPage]
})
export class AgPageModule {}
