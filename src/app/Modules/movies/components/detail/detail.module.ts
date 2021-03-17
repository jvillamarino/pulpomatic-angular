import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkButtonModule } from '@Shared/Components/bookmark-button/bookmark-button.module';


const routes: Routes = [
  {path: ':id', component: DetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BookmarkButtonModule
  ],
  exports: [RouterModule],
  declarations: [DetailComponent]
})
export class DetailModule { }
