import { forwardRef } from "react";

const Button = forwardRef(function Button(
  { children, className = "", ...props },
  ref
) {
  const base =
    "px-4 py-2 bg-green-500 text-black  text-sm border-[3px] border-black shadow-[3px_3px_0_#000]";

  return (
    <button ref={ref} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
});

export default Button;
