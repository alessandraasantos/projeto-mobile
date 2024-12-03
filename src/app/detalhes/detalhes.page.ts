import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importando ActivatedRoute para pegar parâmetros de rota
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  movieDetails: any;
  isFavorite: boolean = false;
  favorites: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getMovieDetails(id).subscribe((details) => {
        this.movieDetails = details;
        console.log('Movie Details:', this.movieDetails);

        // Verifica se o filme já está favoritado no localStorage
        const storedFavorites = localStorage.getItem('favorites');
        this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        this.isFavorite = this.favorites.some((movie) => movie.id === this.movieDetails.id);
      });
    }
  }

  toggleFavorite() {
    if (!this.isFavorite) {
      // Adiciona o filme aos favoritos
      const favoriteMovie = {
        id: this.movieDetails.id,
        title: this.movieDetails.title,
        poster_path: this.movieDetails.poster_path,
      };
      this.favorites.push(favoriteMovie);
    } else {
      // Remove o filme dos favoritos
      this.favorites = this.favorites.filter((movie) => movie.id !== this.movieDetails.id);
    }

    // Atualiza o estado e salva no localStorage
    this.isFavorite = !this.isFavorite;
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
