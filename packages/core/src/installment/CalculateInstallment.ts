import { MAX_NUM_OF_INSTALLMENTS, MONTH_INTEREST_RATE } from "../constants";
import IInstallment from "./IInstallment";

export default class CalculateInstallment {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUM_OF_INSTALLMENTS,
    interestRate: number = MONTH_INTEREST_RATE
  ): IInstallment {
    if (
      numberOfInstallments < 2 ||
      numberOfInstallments > MAX_NUM_OF_INSTALLMENTS
    ) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_NUM_OF_INSTALLMENTS}`
      );
    }

    const totalWithInstalled = this.calculateCompoundInterest(
      value,
      interestRate,
      numberOfInstallments
    );

    return {
      installmentValue:
        Math.round((totalWithInstalled / numberOfInstallments) * 100) / 100,
      totalValue: Math.round(totalWithInstalled * 100) / 100,
      numberOfInstallments,
      interestRate,
    };
  }

  private calculateCompoundInterest(
    totalValue: number,
    monthRate: number,
    numberOfInstallments: number
  ): number {
    return totalValue * Math.pow(1 + monthRate, numberOfInstallments);
  }
}
