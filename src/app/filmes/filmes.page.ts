import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  popularMovies: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {} 

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      console.log('API Response:', data);
      this.popularMovies = data.results;
      window.scrollTo(0, 0); 
    });
  }

  
  goToMovieDetails(movieId: number) {
    this.router.navigate(['/detalhes', movieId]); 
  }
}
