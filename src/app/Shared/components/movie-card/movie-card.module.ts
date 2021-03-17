import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { RouterModule } from '@angular/router';
import { BookmarkButtonModule } from '../bookmark-button/bookmark-button.module';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, BookmarkButtonModule, RouterModule],
  exports: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule {}
