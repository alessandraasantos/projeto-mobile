import { Component, OnInit } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';  // Importando NavController

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements ViewWillEnter {
  public favorites: any[] = [];

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  goToMovieDetails(movieId: number) {
    this.navCtrl.navigateRoot(`/detalhes/${movieId}`);
  }  

  addFavorite(movie: any) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  // Remove do localStorage e atualiza a lista
  removeFavorite(movieId: number) {
    this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some((movie) => movie.id === movieId);
  }

  // Função para navegar para a página de filmes
  goToFilmes() {
    this.navCtrl.navigateRoot('/filmes');  // Navega para a página de filmes
  }
}

