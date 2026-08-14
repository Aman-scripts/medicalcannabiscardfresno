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
      ? {
          width: 560,
          height: 126,
          sizes: "(max-width: 640px) 220px, 280px",
          className: "h-12 w-auto sm:h-14 md:h-16",
        }
      : {
          width: 520,
          height: 116,
          sizes: "(max-width: 768px) 220px, 260px",
          className: "h-12 w-auto md:h-14",
        };

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/fresno-logo.webp"
        alt="Medical Cannabis Card Fresno"
        width={dims.width}
        height={dims.height}
        sizes={dims.sizes}
        quality={95}
        className={cn(
          dims.className,
          "object-contain object-left",
          onDark && "brightness-0 invert",
        )}
      />
    </span>
  );
}
