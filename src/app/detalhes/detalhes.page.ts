import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

        // Verifica se o filme já está favoritado
        const storedFavorites = localStorage.getItem('favorites');
        this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        this.isFavorite = this.favorites.some((movie) => movie.id === this.movieDetails.id);
      });
    }
  }

  toggleFavorite() {
    if (this.isFavorite) {
      // Remove dos favoritos
      this.favorites = this.favorites.filter((movie) => movie.id !== this.movieDetails.id);
    } else {
      // Adiciona aos favoritos
      this.favorites.push(this.movieDetails);
    }

    // Atualiza o estado e salva no localStorage
    this.isFavorite = !this.isFavorite;
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
