import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importando NavController
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  popularMovies: any[] = [];

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController // Injetando NavController
  ) {}

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      console.log('API Response:', data);
      this.popularMovies = data.results;
      window.scrollTo(0, 0); // Força o scroll para o topo
    });
  }

goToMovieDetails(movieId: number) {
  console.log(`Navigating to movie details with ID: ${movieId}`); // Log para depurar
  this.navCtrl.navigateForward(`/detalhes/${movieId}`);
}

  // Usando NavController para navegação para a página de Favoritos
  goToFavoritos() {
    this.navCtrl.navigateForward('/favoritos'); // Navega para a página de favoritos
  }
}
