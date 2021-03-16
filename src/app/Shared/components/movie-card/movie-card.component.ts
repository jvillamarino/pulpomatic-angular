import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '@Shared/Models/Interfaces/general.interface';
import { mdiBookmarkOutline, mdiBookmark } from '@mdi/js';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onWatchList: EventEmitter<Movie> = new EventEmitter();

  private _icons: any = {
    mdiBookmarkOutline,
    mdiBookmark,
  };

  public get icons(): any {
    return this._icons;
  }

  constructor() {}

  ngOnInit() {}


  public addWatchList(){
    this.onWatchList.emit(this.movie);
  }
}
