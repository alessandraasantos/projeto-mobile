import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importando NavController

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public favorites: any[] = [];

  constructor(private navCtrl: NavController) {}  // Injetando NavController

  // Carrega favoritos do localStorage ao iniciar
  ngOnInit() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  // Adiciona ao localStorage e atualiza a lista
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
    this.navCtrl.navigateForward('/filmes');  // Navega para a página de filmes
  }
}

