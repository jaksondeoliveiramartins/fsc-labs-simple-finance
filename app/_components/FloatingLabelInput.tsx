import { FC, InputHTMLAttributes } from "react";

interface FloatingLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const FloatingLabelInput: FC<FloatingLabelProps> = ({
  id,
  type,
  label,
  required,
  ...otherProps
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        placeholder={label}
        className="peer h-[62px] w-full rounded-[12px] border-0 bg-white px-4 pt-2 text-black placeholder-transparent transition-all duration-200 focus:border-2 focus:border-[#55D462] focus:ring-0 focus:outline-none"
        {...otherProps}
      />

      <label
        htmlFor={id}
        className="absolute top-2 left-4 text-[0.625rem] font-normal text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-4 peer-focus:text-[0.625rem] peer-focus:font-semibold peer-focus:text-[#55D462] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#55D462]"
      >
        {label}
      </label>
    </div>
  );
};
