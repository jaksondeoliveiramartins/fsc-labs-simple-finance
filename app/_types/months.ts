export type Month = {
  short: string;
  name: string;
  index: number;
};

export const Months: readonly Month[] = [
  { short: "Jan", name: "Janeiro", index: 1 },
  { short: "Fev", name: "Fevereiro", index: 2 },
  { short: "Mar", name: "Março", index: 3 },
  { short: "Abr", name: "Abril", index: 4 },
  { short: "Mai", name: "Maio", index: 5 },
  { short: "Jun", name: "Junho", index: 6 },
  { short: "Jul", name: "Julho", index: 7 },
  { short: "Ago", name: "Agosto", index: 8 },
  { short: "Set", name: "Setembro", index: 9 },
  { short: "Out", name: "Outubro", index: 10 },
  { short: "Nov", name: "Novembro", index: 11 },
  { short: "Dez", name: "Dezembro", index: 12 },
] as const;
