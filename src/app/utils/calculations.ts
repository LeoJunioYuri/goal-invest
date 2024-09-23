import { InvestmentData, InvestmentResultData } from '../types';

export const performCalculations = (data: InvestmentData): InvestmentResultData => {
  const {
    initialInvestment,
    monthlyContribution,
    annualInterestRate,
    investmentGoal,
    investmentPeriod,
  } = data;

  const monthlyInterestRate = annualInterestRate / 12 / 100;
  let balance = initialInvestment;
  let months = 0;
  const balances = [balance];
  const labels = [months];

  if (investmentGoal !== undefined) {
    // Calcular tempo para atingir a meta
    while (balance < investmentGoal) {
      balance = balance * (1 + monthlyInterestRate) + monthlyContribution;
      months++;
      balances.push(balance);
      labels.push(months);
      if (months > 1000) break;
    }
  } else if (investmentPeriod !== undefined) {
    // Calcular montante após o período de investimento
    for (let i = 0; i < investmentPeriod; i++) {
      balance = balance * (1 + monthlyInterestRate) + monthlyContribution;
      balances.push(balance);
      labels.push(i + 1);
    }
    months = investmentPeriod;
  } else {
    throw new Error('Você deve fornecer uma meta ou um período de investimento.');
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return {
    finalBalance: balance,
    totalMonths: months,
    years,
    remainingMonths,
    balances,
    labels,
  };
};
