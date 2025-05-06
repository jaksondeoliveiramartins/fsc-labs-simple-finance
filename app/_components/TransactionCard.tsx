type TransactionCardProps = {
  children: React.ReactNode;
};

const TransactionCard = ({ children }: TransactionCardProps) => {
  return (
    <div className="w-full rounded-[12px] bg-[var(--card)] px-[30px] py-[35px]">
      {children}
    </div>
  );
};

export default TransactionCard;
