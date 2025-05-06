import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";
import { FaCircle } from "react-icons/fa";

interface TransactionColorProps {
  transactionColor: string;
}

const TransactionColor = ({ transactionColor }: TransactionColorProps) => {
  function getTransactionColor(typeString: string): string {
    const transactionType = typeString.toLowerCase() as TransactionType;

    if (!Object.values(TransactionType).includes(transactionType)) {
      throw new Error(`Invalid transaction type: ${typeString}`);
    }

    return TransactionTypeConfig[transactionType].color;
  }
  return (
    <div>
      <FaCircle size={12} color={getTransactionColor(transactionColor)} />
    </div>
  );
};

export default TransactionColor;
