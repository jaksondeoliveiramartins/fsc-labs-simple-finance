import { CircleIcon } from "lucide-react";
import {
  TransactionTypeConfig,
  TransactionType,
} from "../_types/transactionType";

interface PercentTransactionProps {
  transactionType: TransactionType;
  percentNumber: number;
  showAmount: boolean;
}

const PercentTransaction = ({
  transactionType,
  percentNumber,
  showAmount,
}: PercentTransactionProps) => {
  const { color, label } = TransactionTypeConfig[transactionType];
  return (
    <div className="flex w-10/16 items-center justify-between">
      <div className="flex items-center gap-2">
        <CircleIcon size={17} color={`${color}`} fill={`${color}`} />
        <p className="text-sm font-normal text-[var(--label-foreground)]">
          {label}
        </p>
      </div>
      <p className="text-sm text-[var(--card-foreground)]">
        {showAmount ? percentNumber : "***"}%
      </p>
    </div>
  );
};

export default PercentTransaction;
