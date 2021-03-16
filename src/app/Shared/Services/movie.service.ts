import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { environment as env } from '@Env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  public getTopMovie(): Observable<any> {
    return this._http.get(`${env.api}/movie/top_rated`);
  }

  public getMovies(page: number = 1): Observable<any> {
    return this._http
      .get(`${env.api}/movie/popular?language=en-ES&page=${page}`)
      .pipe(
        map(({ results, page }: any) => {
          results = results.map((value: Movie) => ({
            ...value,
            favorite: false,
            watchList: false,
          }));
          results = results.sort((lastest: Movie, current: Movie) =>
            lastest.vote_average > current.vote_average ? -1 : 1
          );
          return { results, page };
        })
      );
  }

  public getMovieById(id: number): Observable<any> {
    return this._http.get(`${env.api}/movie/${id}`);
  }

  public addCacheMovie(loadedMovies: Movie[], page: number = 1): boolean {
    localStorage.setItem('movies', JSON.stringify(loadedMovies));
    localStorage.setItem('page', page.toString());
    return true;
  }

  public getCachedMovies(): {page: number, movies: Movie[]} {
    const page = +localStorage.getItem('page');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    return {page, movies};
  }

  public getCachedMovieById(id: number): Movie {
    return this.getCachedMovies()['movies']
      .filter((item) => item.id === id)
      .pop();
  }

  public getCachedWatchList(): Movie[] {
    return this.getCachedMovies()['movies'].filter((item: Movie) => item.watchList);
  }

  public removeCachedWatchList(unCachedMovie: Movie): boolean {
    const cachedMovies: Movie[] = this.getCachedMovies()['movies'];
    const index = cachedMovies.findIndex((movie: Movie) => movie.id === unCachedMovie.id);
    cachedMovies[index] = unCachedMovie;
    this.addCacheMovie(cachedMovies);
    return true;
  }



}
