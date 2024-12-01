import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private readonly token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2FmMGExMTcwZDMzM2M5YzdiNjE2ZTIzNDc4MmZmMiIsIm5iZiI6MTczMzA3MjE3Mi42MDcsInN1YiI6IjY3NGM5NTJjMGQ5OWI0NDM2MWUwMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mlnD0JvaNNwzk7sN6YB7KFTbnEcTlxEIt9mwcG6iKc';
  private readonly apiKey = '1caf0a1170d333c9c7b616e234782ff2';

  constructor(private http: HttpClient) {}
  
  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    console.log('Requesting:', url); // Log da URL
    return this.http.get(url).pipe(
      tap(response => console.log('API Response:', response)) // Log da resposta
    );
  }

  getMovieDetails(id: string): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
