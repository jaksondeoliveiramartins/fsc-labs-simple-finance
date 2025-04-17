import { useState } from "react";
import { Input } from "../_lib/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        required
        className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
        placeholder="Senha"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-1/2 right-[22px] -translate-y-1/2 text-[var(--muted-foreground)]"
      >
        {showPassword ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeOff className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
