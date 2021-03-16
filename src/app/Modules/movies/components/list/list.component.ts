import { Component, HostListener, OnInit } from '@angular/core';
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
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this._movieService.addCacheMovie(this._movies, this._currentPage);
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getMovies(++this._currentPage);
    }
  }

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
    this.loadMovies();
  }

  ngOnDestroy(): void {
    this._movieService.addCacheMovie(this._movies, this._currentPage);
  }

  private loadMovies() {
    ({movies: this._movies, page: this._currentPage} = this._movieService.getCachedMovies());
    if (!this._movies.length) {
      this.getMovies();
    }
  }

  private getMovies(page: number = 1) {
    this._isLoading = true;
    this._movieService
      .getMovies(page)
      .pipe(finalize(() => (this._isLoading = false)))
      .subscribe(
        ({ results, page }) => {
          this._movies = this._movies.concat(results);
          this._currentPage = page;
          this._movieService.addCacheMovie(results, page);
          this._toastr.success('', 'Films loaded correctly');
        },
        ({ error: { status_message } }) => {
          this._toastr.error(status_message, 'An error has occurred');
        }
      );
  }

  public trackByFn(index: number, item: Movie) {
    return index;
  }

  public pushWatchList(movie: Movie, index: number) {
    movie.watchList = !movie.watchList;
    this._movies[index] = movie;
  }
}
