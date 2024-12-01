import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1caf0a1170d333c9c7b616e234782ff2';

  constructor(private http: HttpClient) {}

  // Método para buscar filmes populares
  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Método para buscar detalhes de um filme
  getMovieDetails(id: string): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
