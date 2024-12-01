import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements ViewWillEnter {
  popularMovies: any[] = [];

  constructor(private apiService: ApiService) {}

  ionViewWillEnter() {
    this.apiService.getPopularMovies().subscribe(data => {
        this.popularMovies = data.results;
    });
  }
}