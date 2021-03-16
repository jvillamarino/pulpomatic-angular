import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <svg [class]="class" version="1.1" viewBox="0 0 24 24" style="display:inline-block;width:1.5rem">
      <path fill="currentColor" [attr.d]="data" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
    </svg>
  `
})
export class IconComponent {
  @Input() class: string;
  @Input('path') data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
}
