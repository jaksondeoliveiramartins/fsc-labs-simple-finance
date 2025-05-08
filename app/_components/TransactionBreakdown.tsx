import { TransactionType } from "../_types/transactionType";
import TransactionPercent from "./TransactionPercent";

interface TransactionBreakdownProps {
  isShowAmount: boolean;
}

const TransactionBreakdown = ({ isShowAmount }: TransactionBreakdownProps) => {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center gap-2">
        <TransactionPercent
          transactionType={TransactionType.EARNING}
          percentNumber={50}
          showAmount={isShowAmount}
        />
        <TransactionPercent
          transactionType={TransactionType.EXPENSE}
          percentNumber={30}
          showAmount={isShowAmount}
        />
        <TransactionPercent
          transactionType={TransactionType.INVESTMENT}
          percentNumber={20}
          showAmount={isShowAmount}
        />
      </div>
    </div>
  );
};

export default TransactionBreakdown;
