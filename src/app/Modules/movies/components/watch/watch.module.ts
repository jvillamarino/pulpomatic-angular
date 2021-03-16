import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardModule } from '@Shared/Components/movie-card/movie-card.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WatchComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MovieCardModule],
  exports: [RouterModule],
  declarations: [WatchComponent],
})
export class WatchModule {}
