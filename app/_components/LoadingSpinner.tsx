import type React from "react";

interface LoadingSpinnerProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Aguarde...",
  size = "md",
  color = "border-white",
}) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${color} animate-spin rounded-full border-t-transparent`}
        role="status"
        aria-label="Carregando"
      />
      {text && (
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
