import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { environment as env } from '@Env/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  public getTopMovie(): Observable<any> {
    return this._http.get(`${env.api}/movie/top_rated`);
  }

  public getMovies(): Observable<any> {
    return this._http.get<Movie[]>(
      `${env.api}/movie/popular?language=en-ES&page=1`
    );
  }
}
