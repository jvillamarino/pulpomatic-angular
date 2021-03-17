import { Component, OnInit } from '@angular/core';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { MovieService } from '@Shared/Services/movie.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  private _movies: Movie[];

  public get movies(): Movie[] {
    return this._movies;
  }

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getCachedMovies();
  }

  private getCachedMovies() {
    this._movies = this._movieService.getCachedWatchList();
  }

  public trackByFn(index: number, item: Movie) {
    return index;
  }

  public removeWatchList(movie: Movie, index: number) {
    this._movies.splice(index, 1);
    movie.watchList = !movie.watchList;
    this._movieService.cacheMovieWatchList(movie);
  }
}
