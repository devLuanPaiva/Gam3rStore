import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  template: ` <figure
    class="flex items-center gap-2 self-start py-1 px-4 rounded-full text-xs uppercase"
    [ngClass]="{
      'border border-violet-500 text-white': outlined,
      'bg-gradient-to-r from-violet-600 to-violet-700': !outlined,
    }"
    ]
  >
    <i [class]="'fa ' + icon" aria-hidden="true"></i>
    {{ label }}
  </figure>`,
})
export class TagsComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() outlined = false;
}
