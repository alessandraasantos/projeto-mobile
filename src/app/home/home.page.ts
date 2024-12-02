import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  /*goToFilmes() {
    this.navCtrl.navigateForward('/filmes');
  }*/
    goToFilmes() {
      this.navCtrl.navigateRoot('/filmes');
    }
    
    goToFavoritos() {
      this.navCtrl.navigateRoot('/favoritos');
    }
}
