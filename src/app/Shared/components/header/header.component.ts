import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { MovieService } from '@Shared/Services/movie.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'header-movie',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _lastestMovie: Movie;
  private _currentPath: string;

  public get movie(): Movie {
    return this._lastestMovie;
  }

  public get currentPath(): string {
    return this._currentPath;
  }

  constructor(private _movieService: MovieService, private router: Router) {
    this.onChangeRoute();
  }

  ngOnInit() {
    this.getTopMovie();
  }

  private getTopMovie() {
    this._movieService
      .getTopMovie()
      .pipe(map(({ results }) => results.shift()))
      .subscribe((res) => {
        this._lastestMovie = res;
      });
  }

  private onChangeRoute() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this._currentPath = event.url;
      });
  }
}
