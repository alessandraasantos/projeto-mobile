import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { FavoritosPage } from './favoritos.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    SharedModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}
