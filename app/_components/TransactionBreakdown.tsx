import { TransactionType } from "../_types/transactionType";
import PercentTransaction from "./PercentTransaction";

interface TransactionBreakdownProps {
  isShowAmount: boolean;
}

const TransactionBreakdown = ({ isShowAmount }: TransactionBreakdownProps) => {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center gap-2">
        <PercentTransaction
          transactionType={TransactionType.EARNING}
          percentNumber={50}
          showAmount={isShowAmount}
        />
        <PercentTransaction
          transactionType={TransactionType.EXPENSE}
          percentNumber={30}
          showAmount={isShowAmount}
        />
        <PercentTransaction
          transactionType={TransactionType.INVESTMENT}
          percentNumber={20}
          showAmount={isShowAmount}
        />
      </div>
    </div>
  );
};

export default TransactionBreakdown;
