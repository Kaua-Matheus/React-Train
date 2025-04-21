import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
        <button
          className={`
                    p-1 rounded-sm hover:cursor-pointer
                    ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
  );
}