import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full border-b border-gray-300 py-2 text-base outline-none transition-colors placeholder:text-gray-400
          focus:border-black focus:border-b-2
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? "border-red-500 placeholder:text-red-300" : ""}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";