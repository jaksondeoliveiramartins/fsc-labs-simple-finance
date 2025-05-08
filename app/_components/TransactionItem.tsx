import { TransactionType } from "../_types/transactionType";
import TransactionBadge from "./TransactionBadge";

interface TransactionItemProps {
  transactionType: TransactionType;
  transactionName: string;
  transactionValue: string;
  transactionDate: string;
}

const TransactionItem = ({
  transactionType,
  transactionName,
  transactionValue,
  transactionDate,
}: TransactionItemProps) => {
  return (
    <div className="mt-10 flex justify-between">
      <div className="flex items-center gap-3">
        <TransactionBadge transactionType={transactionType} />
        <div className="text-sm">{transactionName}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm font-bold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(transactionValue))}
        </div>
        <div className="text-xs text-[#7A7A7A]">{transactionDate}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
