import { IInstallment, ICartItem as ItemCartModel } from '@gstore/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InstallmentService } from '../../../services/installment.service';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './item-cart.component.html',
})
export class ItemCartComponent implements OnChanges {
  @Input() item!: ItemCartModel;
  @Input() addItem!: () => void;
  @Input() removeItem!: () => void;
  @Input() removeProduct!: () => void;

  icons = {
    minus: faMinus,
    plus: faPlus,
    trash: faTrash,
  };

  installmentDetails!: IInstallment;
  constructor(
    private readonly installmentService: InstallmentService,
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] && this.item.product.promotionalPrice) {
      this.calculateInstallments();
    }
  }
  calculateInstallments() {
    if (this.item?.product.promotionalPrice) {
      this.installmentDetails = this.installmentService.calculateInstallment(
        this.item.product.promotionalPrice,
        12,
      );
    }
  }
}
