import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardModule } from '@Shared/Components/movie-card/movie-card.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MovieCardModule],
  exports: [ListComponent, RouterModule],
  declarations: [ListComponent],
})
export class ListModule {}
