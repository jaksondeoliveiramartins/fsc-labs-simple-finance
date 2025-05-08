"use client";

import { useState } from "react";
import BalanceCard from "../_components/BalanceCard";
import IPeriod from "../_interfaces/IPeriod";
import TransactionActions from "../_components/TransactionActions";
import DateRangePicker from "../_components/DateRangePicker";
import PercentTransaction from "../_components/PercentTransaction";
import { TransactionType } from "../_types/transactionType";
import TransactionTypeSelector from "../_components/TransactionTypeSelector";

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
      {/* Transaction Type Selector */}
      <div>
        <div className="text-sm">TransactionType Selector</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <TransactionTypeSelector />
        </div>
      </div>

      {/* Date Range Picker */}
      <div>
        <div className="text-sm">Date Range Picker</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <DateRangePicker handleOnClick={handleSelectedMonth} />
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

      {/* Transaction Actions */}
      <div>
        <div className="text-sm">Transaction Actions</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <TransactionActions />
        </div>
      </div>

      {/* Percent Transaction */}
      <div>
        <div className="text-sm">Transaction Actions</div>
        <div className="flex w-full flex-col items-center justify-center gap-2 border-2 p-5">
          <PercentTransaction
            transactionType={TransactionType.EARNING}
            percentNumber={50}
          />
          <PercentTransaction
            transactionType={TransactionType.EXPENSE}
            percentNumber={20}
          />
          <PercentTransaction
            transactionType={TransactionType.INVESTMENT}
            percentNumber={30}
          />
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
