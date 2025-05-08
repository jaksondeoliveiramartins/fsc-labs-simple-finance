import { TransactionType } from "../_types/transactionType";
import TransactionItem from "./TransactionItem";

interface TransactionItemsCardProps {
  transactions: {
    transactionType: TransactionType;
    transactionName: string;
    transactionValue: string;
    transactionDate: string;
  }[];
}

const TransactionItemsCard = ({ transactions }: TransactionItemsCardProps) => {
  return (
    <div className="relative">
      {transactions.length > 0 && (
        <div
          className="relative flex max-h-[300px] w-full flex-col items-center justify-start gap-2 overflow-y-auto rounded-[12px] bg-[var(--card)] p-5"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {transactions.map((transaction, index) => (
            <div key={index} className="w-full">
              <TransactionItem
                transactionType={transaction.transactionType}
                transactionName={transaction.transactionName}
                transactionValue={transaction.transactionValue}
                transactionDate={transaction.transactionDate}
              />
              {index < transactions.length - 1 && (
                <hr className="my-2 border-[var(--hr-border-color)]" />
              )}
            </div>
          ))}
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 h-10 w-full rounded-b-[12px]"
        style={{
          background:
            "linear-gradient(to top, var(--card) 0%, var(--card) 10%, transparent 100%)",
        }}
      ></div>
    </div>
  );
};

export default TransactionItemsCard;
