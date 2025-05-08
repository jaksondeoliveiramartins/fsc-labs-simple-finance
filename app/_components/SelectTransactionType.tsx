"use client";

import { useState } from "react";
import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";

const SelectTransactionType = () => {
  const [selectedType, setSelectedType] = useState<TransactionType>(
    TransactionType.EARNING,
  );

  const { color: earningColor, label: earningLabel } =
    TransactionTypeConfig[TransactionType.EARNING];
  const { color: expenseColor, label: expenseLabel } =
    TransactionTypeConfig[TransactionType.EXPENSE];
  const { color: investmentColor, label: investmentLabel } =
    TransactionTypeConfig[TransactionType.INVESTMENT];

  return (
    <div className="flex w-full items-center justify-center gap-3">
      <button
        onClick={() => setSelectedType(TransactionType.EARNING)}
        className={"h-16 w-28 truncate rounded-2xl border p-5 font-semibold"}
        style={
          selectedType === TransactionType.EARNING
            ? {
                borderColor: earningColor,
                color: earningColor,
              }
            : {}
        }
      >
        {earningLabel}
      </button>
      <button
        onClick={() => setSelectedType(TransactionType.EXPENSE)}
        className={"h-16 w-28 truncate rounded-2xl border p-5 font-semibold"}
        style={
          selectedType === TransactionType.EXPENSE
            ? {
                borderColor: expenseColor,
                color: expenseColor,
              }
            : {}
        }
      >
        {expenseLabel}
      </button>
      <button
        onClick={() => setSelectedType(TransactionType.INVESTMENT)}
        className={"h-16 w-28 truncate rounded-2xl border p-5 font-semibold"}
        style={
          selectedType === TransactionType.INVESTMENT
            ? {
                borderColor: investmentColor,
                color: investmentColor,
              }
            : {}
        }
      >
        {investmentLabel}
      </button>
    </div>
  );
};

export default SelectTransactionType;
