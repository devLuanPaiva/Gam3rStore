import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IOrderDelivery } from '@gstore/core';
@Component({
  selector: 'app-form-delivery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-delivery.component.html',
})
export class FormDeliveryComponent {
  @Input() className: string = '';
  @Input() delivery: Partial<IOrderDelivery> = {};
  @Output() deliveryChange = new EventEmitter<Partial<IOrderDelivery>>();

  onDeliveryChange() {
    this.deliveryChange.emit(this.delivery);
  }
}
