import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule],
  exports: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule {}
