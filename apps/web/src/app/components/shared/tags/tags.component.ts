import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: ` <figure
    class="flex items-center gap-2 self-start py-1 px-4 rounded-full text-xs uppercase"
    [ngClass]="{
      'border border-violet-500 text-white': outlined,
      'bg-gradient-to-r from-violet-600 to-violet-700': !outlined,
    }"
    ]
  >
    <fa-icon [icon]="icon" />
    {{ label }}
  </figure>`,
})
export class TagsComponent {
  @Input() label!: string;
  @Input() icon!: IconDefinition;
  @Input() outlined = false;
}
