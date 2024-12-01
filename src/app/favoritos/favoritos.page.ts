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
  

  getFavorites(): any[] {
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

  ngOnInit() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }
  
}
