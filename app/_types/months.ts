export type Month = {
  short: string;
  name: string;
  index: number;
};

export const Months: readonly Month[] = [
  { short: "Jan", name: "Janeiro", index: 0 },
  { short: "Fev", name: "Fevereiro", index: 1 },
  { short: "Mar", name: "Março", index: 2 },
  { short: "Abr", name: "Abril", index: 3 },
  { short: "Mai", name: "Maio", index: 4 },
  { short: "Jun", name: "Junho", index: 5 },
  { short: "Jul", name: "Julho", index: 6 },
  { short: "Ago", name: "Agosto", index: 7 },
  { short: "Set", name: "Setembro", index: 8 },
  { short: "Out", name: "Outubro", index: 9 },
  { short: "Nov", name: "Novembro", index: 10 },
  { short: "Dez", name: "Dezembro", index: 11 },
] as const;
