import { Circle } from "lucide-react";
import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";

interface TransactionBadgeProps {
  transactionType: string;
}

const TransactionBadge = ({ transactionType }: TransactionBadgeProps) => {
  const { color } = TransactionTypeConfig[transactionType as TransactionType];
  return (
    <Circle fill={color} stroke={color} className="h-3 min-h-3 w-3 min-w-3" />
  );
};

export default TransactionBadge;
