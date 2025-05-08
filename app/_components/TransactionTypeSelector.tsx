import { useState } from "react";
import { TransactionType } from "../_types/transactionType";
import TransactionTypeOption from "./TransactionTypeOption";

const TransactionTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<TransactionType>(
    TransactionType.EARNING,
  );

  const types = [
    TransactionType.EARNING,
    TransactionType.EXPENSE,
    TransactionType.INVESTMENT,
  ];

  return (
    <div className="flex w-full items-center justify-center gap-3">
      {types.map((type) => (
        <TransactionTypeOption
          key={type}
          type={type}
          isSelected={selectedType === type}
          onClick={() => setSelectedType(type)}
        />
      ))}
    </div>
  );
};

export default TransactionTypeSelector;
