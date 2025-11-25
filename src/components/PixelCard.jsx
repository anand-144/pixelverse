function PixelCard({ children, className = "", variant = "default", ...props }) {
  // base pixel card style
  let baseClasses =
    "bg-neutral-900 border-[4px] border-black shadow-[4px_4px_0_#000] p-6";

  let variantClasses = "";

  // Hover Pixel Effect
  if (variant === "hover") {
    variantClasses =
      "cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-transform";
  }

  // Glow Variant
  if (variant === "glow") {
    variantClasses = "ring-2 ring-green-400/50";
  }

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  return (
    <div className={finalClasses} {...props}>
      {children}
    </div>
  );
}

export default PixelCard;
