import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../_lib/components/ui/dialog";

export default function UpsertTransactionDialog() {
  return (
    <DialogContent
      onInteractOutside={(event) => {
        event.preventDefault();
      }}
      className="w-96 border-none bg-[#242424] shadow-none"
    >
      <DialogHeader>
        <DialogTitle className="text-center text-white">
          Adicionar Transação
        </DialogTitle>
      </DialogHeader>
    </DialogContent>
  );
}
