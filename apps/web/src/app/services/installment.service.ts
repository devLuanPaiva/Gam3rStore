import { Injectable } from '@angular/core';
import { CalculateInstallment } from '@gstore/core';

@Injectable({
  providedIn: 'root',
})
export class InstallmentService {
  constructor() {}
  calculateInstallment(price: number, quantity: number = 12) {
    const installment = new CalculateInstallment().execute(price, quantity);
    return installment;
  }
}
