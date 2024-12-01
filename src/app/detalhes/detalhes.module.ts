import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DetalhesPageRoutingModule } from './detalhes-routing.module';
import { DetalhesPage } from './detalhes.page';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPageRoutingModule,
    SharedModule
  ],
  declarations: [DetalhesPage]
})
export class DetalhesPageModule {}
