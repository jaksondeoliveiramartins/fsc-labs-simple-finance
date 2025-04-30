"use client";

import { useEffect } from "react";
import { useAuthContext } from "../_contexts/auth";
import { Button } from "../_lib/components/ui/button";
import { useRouter } from "next/navigation";
import DashboardHeader from "../_components/DashboardHeader";
import DateRangePicker from "../_components/DateRangePicker";
import BalanceCard from "../_components/BalanceCard";
import TransactionActions from "../_components/TransactionActions";
import LoadingSpinner from "../_components/LoadingSpinner";
export default function Dashboard() {
  const { signOut, user, isInitializing } = useAuthContext();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/signin");
  };

  useEffect(() => {
    if (!isInitializing && !user) {
      router.push("/signin");
    }
  }, [isInitializing, user, router]);

  if (isInitializing || !user) {
    return <LoadingSpinner text="Carregando" />;
  }

  return (
    <div className="dash-container w-full">
      <DashboardHeader />
      <div className="mt-[68px] flex w-full flex-col items-center">
        <div className="flex w-full items-center justify-between py-8">
          <div>
            Olá <span className="font-semibold">{user.firstName}</span>!
          </div>
          <DateRangePicker handleOnClick={() => {}} />
        </div>
        <div className="flex w-full flex-col gap-4">
          <BalanceCard
            label="Saldo"
            amount={12500.5}
            image="/images/empty-wallet.svg"
          />
          <BalanceCard
            label="Ganhos"
            amount={330.5}
            image="/images/empty-earnings.svg"
          />
          <BalanceCard
            label="Gastos"
            amount={1500.75}
            image="/images/empty-expenses.svg"
          />

          <BalanceCard
            label="Investimentos"
            amount={5000.0}
            image="/images/empty-investment.svg"
          />
        </div>

        <div className="my-[30px] w-full">
          <TransactionActions />
        </div>

        <Button onClick={handleSignOut} className="mt-4">
          Sair
        </Button>
      </div>
    </div>
  );
}
