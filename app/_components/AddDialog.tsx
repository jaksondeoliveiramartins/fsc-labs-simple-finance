import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../_lib/components/ui/dialog";

export default function AddDialog() {
  return (
    <DialogContent className="w-96 border-none bg-[#242424] shadow-none">
      <DialogHeader>
        <DialogTitle className="text-center text-white">
          Adicionar Transação
        </DialogTitle>
      </DialogHeader>
    </DialogContent>
  );
}
