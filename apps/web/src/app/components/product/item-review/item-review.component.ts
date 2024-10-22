import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarOutline,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-item-review',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './item-review.component.html',
})
export class ItemReviewComponent {
  @Input() rating!: number;
  @Input() size?: number;

  get fontAwesomeSize(): SizeProp {
    switch (this.size) {
      case 1:
        return 'xs';
      case 2:
        return 'sm';
      case 3:
        return 'lg';
      case 4:
        return '2x';
      case 5:
        return '3x';
      default:
        return '1x';
    }
  }

  get stars() {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (this.rating >= i) {
        starsArray.push({ icon: faStar });
      } else if (this.rating >= i - 0.5) {
        starsArray.push({ icon: faStarHalfAlt });
      } else {
        starsArray.push({ icon: faStarOutline });
      }
    }
    return starsArray;
  }
}
