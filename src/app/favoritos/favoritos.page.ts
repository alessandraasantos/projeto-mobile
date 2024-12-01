import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {

  private favorites: any[] = [];

  getFavorites() {
    return this.favorites;
  }

  addFavorite(movie: any) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }

  removeFavorite(movieId: number) {
    this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some((movie) => movie.id === movieId);
  }
}
