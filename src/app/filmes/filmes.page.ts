import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  popularMovies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      console.log('API Response:', data);
      this.popularMovies = data.results;
      window.scrollTo(0, 0); // Força o scroll para o topo
    });
  }
}
