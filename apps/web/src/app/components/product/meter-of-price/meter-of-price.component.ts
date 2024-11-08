import { IProduct } from '@gstore/core';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faFlushed,
  faSmile,
  faFrown,
  faFaceMeh,
  faFaceSadTear,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-meter-of-price',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './meter-of-price.component.html',
})
export class MeterOfPriceComponent {
  @Input() product!: IProduct;
  icons = {
    chevronDown: faChevronDown,
    flushed: faFlushed,
    smile: faSmile,
    frown: faFrown,
    faceMeh: faFaceMeh,
    faceSadTear: faFaceSadTear,
    faceSmile: faFaceSmile,
  };
  get percentage(): number {
    const {
      promotionalPrice: current,
      averagePrice: avarange,
      highestPrice: max,
      lowestPrice: min,
    } = this.product;

    return current > avarange
      ? ((current - avarange) / (max - avarange)) * 50 + 50
      : (1 - (avarange - current) / (avarange - min)) * 50;
  }
}
