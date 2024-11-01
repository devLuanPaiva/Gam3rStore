import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EPaymentMethod } from '@gstore/core';

@Component({
  selector: 'app-method-payment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex flex-col gap-3">
      <h2 class="text-xl font-bold text-white/70">
        Forma de Pagamento
      </h2>
      <button
        *ngFor="let method of methods"
        (click)="selectMethod(method)"
        [ngClass]="
          'flex items-center gap-3 rounded-lg h-12 px-7 bg-[#0e001d] ' + className
        "
      >
        <span
          [ngClass]="
            methodPayment === method
              ? 'bg-emerald-500 border-emerald-500'
              : 'bg-transparent border-white'
          "
          class="w-5 h-5 border-2 rounded-full"
        >
        </span>
        {{ method }}
      </button>
    </section>
  `,
})
export class MethodPaymentComponent {
  @Input() className: string = '';
  @Input() methodPayment!: EPaymentMethod;
  @Output() changedMethod = new EventEmitter<EPaymentMethod>();

  methods = [EPaymentMethod.BOLETO, EPaymentMethod.CARD, EPaymentMethod.PIX];

  selectMethod(method: EPaymentMethod) {
    this.changedMethod.emit(method);
  }
}
