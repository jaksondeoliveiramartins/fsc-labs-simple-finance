export enum TransactionType {
  EARNING = "earning",
  EXPENSE = "expense",
  INVESTMENT = "investment",
}

export const TransactionTypeConfig: Record<
  TransactionType,
  { color: string; label: string }
> = {
  [TransactionType.EARNING]: {
    color: "var(--earning-color)",
    label: "Ganhos",
  },
  [TransactionType.EXPENSE]: {
    color: "var(--expense-color)",
    label: "Gastos",
  },
  [TransactionType.INVESTMENT]: {
    color: "var(--investment-color)",
    label: "Investimentos",
  },
};
