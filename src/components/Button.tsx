import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};

const Button = ({ children, className, size = "medium" }: Props) => {
  const sizeClassName = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "text-textBlack rounded-full bg-white px-3 py-1",
        sizeClassName[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
