import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { EPaymentMethod, IInstallment } from '@gstore/core';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  @Input() className: string = '';
  @Input() ammountItem!: number;
  @Input() totalPrice!: number;
  @Input() value!: number;
  @Input() installment!: IInstallment;
  @Input() methodPay!: EPaymentMethod;
  @Output() finalizePurchase = new EventEmitter<void>();

  faCredCard = faCreditCard
  onFinalizePurchase() {
    this.finalizePurchase.emit();
  }
}
