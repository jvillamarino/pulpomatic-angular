import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'watch',
    loadChildren: () =>
      import('./components/watch/watch.module').then((m) => m.WatchModule),
  },
  {
    path: 'principal',
    loadChildren: () =>
      import('./components/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./components/detail/detail.module').then((m) => m.DetailModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [MoviesComponent],
})
export class MoviesModule {}
