import { CalculateInstallment } from "../installment";
import { MAX_NUM_OF_INSTALLMENTS, MONTH_INTEREST_RATE } from "../constants";

describe("CalculateInstallment", () => {
    let calculator: CalculateInstallment
    beforeEach(() => {
        calculator = new CalculateInstallment()
    })

    it('Should return correct installment values for a valid numbr of installments', () => {
        const result = calculator.execute(1000, 6, 0.05)
        expect(result.totalValue).toBeCloseTo(1340.10, 2);
        expect(result.installmentValue).toBeCloseTo(223.35, 2)
        expect(result.numberOfInstallments).toBe(6);
        expect(result.interestRate).toBe(0.05);
    })
})