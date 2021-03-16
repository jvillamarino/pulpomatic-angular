import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, IconModule, RouterModule],
  exports: [MovieCardComponent],
  providers: [],
})
export class MovieCardModule {}
