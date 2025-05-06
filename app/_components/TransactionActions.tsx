"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import externalLinkIcon from "@/public/images/external-link.svg";
import AddDialog from "./AddDialog";
import { useState } from "react";
import { Dialog, DialogTrigger } from "../_lib/components/ui/dialog";
import { Button } from "../_lib/components/ui/button";

import TransactionCard from "./TransactionCard";

export default function TransactionActions() {
  const [open, setOpen] = useState(false);
  return (
    <TransactionCard>
      <div className="flex items-center justify-between gap-[15px]">
        <h2 className="text-base font-semibold text-[var(--card-foreground)]">
          Transações
        </h2>
        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button className="flex h-[30.29px] transform items-center gap-[3.74px] rounded-[5px] bg-neutral-700 px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600">
                <Plus size={14} />
                Adicionar
              </Button>
            </DialogTrigger>
            <AddDialog />
          </Dialog>
          <a className="flex h-[30.29px] transform items-center justify-center rounded-[5px] bg-neutral-700 px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600">
          <a
            href={addRoute}
            className="flex h-[30.29px] transform items-center gap-[3.74px] rounded-[5px] bg-[var(--default-button)] px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600"
          >
            <Plus size={14} />
            Adicionar
          </a>
          <a
            href={viewRoute}
            className="flex h-[30.29px] transform items-center justify-center rounded-[5px] bg-[var(--default-button)] px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600"
          >

            <Image
              src={externalLinkIcon}
              alt="Visualizar Transações"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </TransactionCard>
  );
}
