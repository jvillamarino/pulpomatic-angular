import { Component, OnInit } from '@angular/core';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { MovieService } from '@Shared/Services/movie.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'header-movie',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _lastestMovie: Movie;

  public get movie(): Movie {
    return this._lastestMovie;
  }

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getTopMovie();
  }

  private getTopMovie() {
    this._movieService.getTopMovie()
    .pipe(map(({results}) => results.shift()))
    .subscribe((res) => {
      console.log(res);
      this._lastestMovie = res;
    });
  }
}
