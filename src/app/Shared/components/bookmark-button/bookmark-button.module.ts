import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkButtonComponent } from './bookmark-button.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [BookmarkButtonComponent],
  declarations: [BookmarkButtonComponent]
})
export class BookmarkButtonModule { }
