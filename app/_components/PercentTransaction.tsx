import { CircleIcon } from "lucide-react";

interface PercentTransactionProps {
  backgroundColor: "green" | "blue" | "red";
  transactionType: "ganhos" | "gastos" | "investimento";
  percentNumber: number;
}

const PercentTransaction = ({
  backgroundColor,
  transactionType,
  percentNumber,
}: PercentTransactionProps) => {
  return (
    <div className="flex w-1/2 items-center justify-between">
      <div className="flex items-center gap-2">
        <CircleIcon size={17} color={backgroundColor} fill={backgroundColor} />
        <p className="text-sm font-semibold text-gray-400">{transactionType}</p>
      </div>
      <p>{percentNumber}%</p>
    </div>
  );
};

export default PercentTransaction;
