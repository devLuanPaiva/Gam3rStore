import { CalculateInstallment } from "../installment";
import { MAX_NUM_OF_INSTALLMENTS, MONTH_INTEREST_RATE } from "../constants";

describe("CalculateInstallment", () => {
  let calculator: CalculateInstallment;
  beforeEach(() => {
    calculator = new CalculateInstallment();
  });

  it("Should return correct installment values for a valid numbr of installments", () => {
    const result = calculator.execute(1000, 6, 0.05);
    expect(result.totalValue).toBeCloseTo(1340.1, 2);
    expect(result.installmentValue).toBeCloseTo(223.35, 2);
    expect(result.numberOfInstallments).toBe(6);
    expect(result.interestRate).toBe(0.05);
  });
  it("Should throw an error if the number of installments is less than 2 or exceed the maximum limit", () => {
    expect(() => calculator.execute(1000, 1)).toThrowError(
      `Quantidade de parcelas deve ser entre 2 e ${MAX_NUM_OF_INSTALLMENTS}`
    );
    expect(() =>
      calculator.execute(1000, MAX_NUM_OF_INSTALLMENTS + 1)
    ).toThrowError(
      `Quantidade de parcelas deve ser entre 2 e ${MAX_NUM_OF_INSTALLMENTS}`
    );
  });
});
