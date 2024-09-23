export interface InvestmentData {
    initialInvestment: number;
    monthlyContribution: number;
    annualInterestRate: number;
    investmentGoal?: number;
    investmentPeriod?: number;
  }
  
  export interface InvestmentResultData {
    finalBalance: number;
    totalMonths: number;
    years: number;
    remainingMonths: number;
    balances: number[];
    labels: number[];
  }
  