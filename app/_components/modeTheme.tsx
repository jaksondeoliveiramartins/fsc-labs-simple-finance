
import * as React from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import { Button } from "../_lib/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../_lib/components/ui/dropdown-menu";


export function ModeTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// const inputVariants = tv({
//   base: "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none",
//   variants: {
//     variant: {
//       light: " translate-x-0",
//       dark: " translate-x-6",
//     },
//   },
//   defaultVariants: {
//     variant: "light",
//   },
// });

// export default function ModeTheme() {
//   const [theme] = useState("light");
//   const { setTheme } = useTheme();

//   useEffect(() => {
//     setTheme(theme);
//   }, [, setTheme, theme]);

//   return (
//     <div className="flex items-center justify-center">

//       <label
//       className="relative flex items-center cursor-pointer"
//         htmlFor="theme-toggle"
//       >
//         <div className="w-14 h-8 relative rounded-3xl bg-background border border-icon-color">
//         <input
//           type="checkbox"
//           id="theme-toggle"
//           className="hidden"
//           onChange={() => setTheme(theme === "light" ? "dark" : "light")}
//           checked={theme === "light"}
//         />

//         {/* <Button variant="outline" size="icon">
//         <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//         <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//         <span className="sr-only">Toggle theme</span>
//       </Button> */}
//         <div
//           className={inputVariants({
//             variant: theme === "light" ? "light" : "dark",
//           })}
//         >
//           {theme === "light" ? (
//             <Sun className="fill-icon-color size-5" />
//           ) : (
//             <Moon className="fill-icon-color size-5" />
//           )}
//         </div>
//         </div>
//       </label>
//     </div>
//   );
// }
