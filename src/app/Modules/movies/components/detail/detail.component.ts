import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { MovieService } from '@Shared/Services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private _movie: Movie;
  private _idMovie: number;

  public get movie(): Movie {
    return this._movie;
  }

  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute
  ) {
    this._idMovie = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getMovieDetail(this._idMovie);
  }

  private getMovieDetail(id: number) {
    this._movieService.getMovieById(id).subscribe((res) => {
      this._movie = res;
      const cachedMovie = this._movieService.getCachedMovieById(this._movie.id);
      this._movie = { ...this._movie, ...cachedMovie };
    });
  }

  public onClickBookmark() {
    this._movie.watchList = !this._movie.watchList;
    this._movieService.cacheMovieWatchList(this._movie);
  }
}
