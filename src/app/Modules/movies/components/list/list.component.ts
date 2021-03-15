import { Component, OnInit } from '@angular/core';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { MovieService } from '@Shared/Services/movie.service';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private _movies: Movie[] = [];
  private _isLoading: boolean = false;
  private _currentPage: number = 1;

  public get movies(): Movie[] {
    return this._movies;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  constructor(
    private _movieService: MovieService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this._isLoading = true;
    this._movieService
      .getMovies()
      .pipe(finalize(() => (this._isLoading = false)))
      .subscribe(
        ({ results, page }) => {
          this._movies = results;
          this._currentPage = page;
          this._toastr.success('', 'Films loaded correctly');
        },
        ({ error: { status_message } }) => {
          this._toastr.error(status_message, 'An error has occurred');
        }
      );
  }
}
