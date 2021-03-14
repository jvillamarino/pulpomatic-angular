import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WatchComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [WatchComponent],
})
export class WatchModule {}
