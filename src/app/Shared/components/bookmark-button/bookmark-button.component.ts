import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mdiBookmarkOutline, mdiBookmark } from '@mdi/js';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.scss'],
})
export class BookmarkButtonComponent implements OnInit {
  @Input() active: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  private _icons: any = {
    mdiBookmarkOutline,
    mdiBookmark,
  };

  public get icons(): any {
    return this._icons;
  }

  constructor() {}

  ngOnInit() {}

  public onBookmark() {
    this.onClick.emit(true);
  }
}
