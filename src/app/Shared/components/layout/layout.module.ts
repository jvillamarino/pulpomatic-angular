import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenuModule } from '../menu/menu.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [CommonModule, MenuModule, HeaderModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
