import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  popularMovies: any[] = [];
  favorites: any[] = []; // Lista de favoritos

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      console.log('API Response:', data);
      this.popularMovies = data.results;
      window.scrollTo(0, 0); // Força o scroll para o topo

      // Carrega favoritos do localStorage
      const storedFavorites = localStorage.getItem('favorites');
      this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    });
  }

  // Função para verificar se o filme está nos favoritos
  isFavorite(movieId: number): boolean {
    return this.favorites.some((movie) => movie.id === movieId);
  }

  // Função para remover o filme dos favoritos
  removeFavorite(movieId: number) {
    this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  // Função para adicionar filme aos favoritos
  addFavorite(movie: any) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}
