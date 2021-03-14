import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [CommonModule, MenuModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
