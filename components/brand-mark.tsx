import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Larger lockup for footer */
  size?: "sm" | "md";
  /** Render logo in solid white for dark backgrounds */
  onDark?: boolean;
};

export function BrandMark({
  className,
  size = "sm",
  onDark = false,
}: BrandMarkProps) {
  const dims =
    size === "sm"
      ? { width: 280, height: 63, className: "h-12 w-auto sm:h-14 md:h-16" }
      : { width: 260, height: 58, className: "h-12 w-auto md:h-14" };

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="Medical Cannabis Card Fresno"
        width={dims.width}
        height={dims.height}
        className={cn(
          dims.className,
          "object-contain object-left",
          onDark && "brightness-0 invert",
        )}
        priority={size === "sm"}
      />
    </span>
  );
}
