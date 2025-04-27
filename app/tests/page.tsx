"use client";

import { useState } from "react";
import BalanceCard from "../_components/BalanceCard";
import MonthYearPicker from "../_components/MonthYearPicker";
import ThemeToggleBar from "../_components/ThemeToggle";
import IPeriod from "../_interfaces/IPeriod";

export default function ComponentTest() {
  const [period, setPeriod] = useState<IPeriod>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleSelectedMonth = (period: IPeriod) => {
    setPeriod(period);
  };

  return (
    <div className="space-y-4">
      {/* Theme Toggle */}
      <div>
        <div className="text-sm">ThemeToggle</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <ThemeToggleBar />
        </div>
      </div>

      {/* Month Year Picker */}
      <div>
        <div className="text-sm">MonthYearPicker</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <MonthYearPicker handleOnClick={handleSelectedMonth} />
          {period && (
            <span className="text-xs">
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(period.startDate),
              )}{" "}
              -{" "}
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(period.endDate),
              )}
            </span>
          )}
        </div>
      </div>

      {/* Balance Cards */}
      <div>
        <div className="text-sm">BalanceCard</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <div className="mx-auto w-full space-y-4">
            <BalanceCard
              label="Saldo"
              amount={12500.5}
              image="/images/empty-wallet.svg"
            />

            <BalanceCard
              label="Ganhos"
              amount={330.5}
              image="/images/empty-earnings.svg"
            />

            <BalanceCard
              label="Gastos"
              amount={1500.75}
              image="/images/empty-expenses.svg"
            />

            <BalanceCard
              label="Investimentos"
              amount={5000.0}
              image="/images/empty-investment.svg"
            ></BalanceCard>
          </div>
        </div>
      </div>
    </div>
  );
}
