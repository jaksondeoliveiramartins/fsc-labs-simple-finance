import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface BalanceCardProps {
  label: "Saldo" | "Ganhos" | "Gastos" | "Investimentos";
  amount?: number;
  image: string | StaticImageData;
  showValue?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

const cardThemes = {
  Saldo: {
    gradient:
      "radial-gradient(ellipse at 30% 100%, rgba(168,168,168,0.25) 10%, transparent 80%)",
    iconBg: "rgba(168, 168, 168, 0.2)",
    textColor: "var(--label-foreground)",
  },
  Ganhos: {
    gradient:
      "radial-gradient(ellipse at 30% 100%, rgba(85,212,98,0.25) 10%, transparent 80%)",
    iconBg: "rgba(85, 212, 98, 0.2)",
    textColor: "text-green-400",
  },
  Gastos: {
    gradient:
      "radial-gradient(ellipse at 30% 100%, rgba(253, 62, 62, 0.25) 10%, transparent 80%)",
    iconBg: "rgba(253, 62, 62, 0.2)",
    textColor: "text-red-400",
  },
  Investimentos: {
    gradient:
      "radial-gradient(ellipse at 30% 100%, rgba(88,155,255,0.25) 10%, transparent 80%)",
    iconBg: "rgba(88,155,255, 0.2)",
    textColor: "text-blue-400",
  },
};

export default function BalanceCard({
  label = "Saldo",
  amount,
  image,
  showValue = false,
  children,
  compact = false,
}: BalanceCardProps) {
  const theme = cardThemes[label];

  return (
    <div
      className={`relative flex items-center justify-between overflow-hidden rounded-[12px] shadow-lg ${compact ? "p-4" : "p-5"} border border-[var(--card-border)] bg-[var(--card)]`}
    >
      {/* Gradiente em arco */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{ background: theme.gradient }}
      />

      <div className="relative z-10">
        <p className={`text-sm font-medium ${theme.textColor}`}>{label}</p>
        <p
          className={`font-bold ${compact ? "text-xl" : "text-2xl"} mt-1 text-[var(--card-foreground)]`}
        >
          R${" "}
          {showValue && amount !== undefined
            ? amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
            : "******"}
        </p>
        {children && (
          <div className={`mt-1 text-xs ${theme.textColor}`}>{children}</div>
        )}
      </div>

      <div
        className={`relative z-10 rounded-full ${compact ? "p-2" : "p-3"} ${theme.textColor} bg-opacity-20`}
        style={{ backgroundColor: theme.iconBg }}
      >
        <Image
          src={image}
          alt={`Ícone de ${label}`}
          width={compact ? 20 : 24}
          height={compact ? 20 : 24}
          className={compact ? "h-5 w-5" : "h-6 w-6"}
        />
      </div>
    </div>
  );
}
