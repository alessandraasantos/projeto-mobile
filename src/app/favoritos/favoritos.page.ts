import { Injectable, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public favorites: any[] = [];

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
}
