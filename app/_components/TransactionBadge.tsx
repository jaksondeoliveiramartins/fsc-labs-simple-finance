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
  return <Circle size={12} fill={color} stroke={color} />;
};

export default TransactionBadge;
