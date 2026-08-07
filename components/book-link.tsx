"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

function scrollToBook() {
  const el = document.getElementById("book");
  if (!el) return false;

  window.history.pushState(null, "", "/#book");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function BookLink({
  className,
  children,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (pathname === "/") {
      event.preventDefault();
      scrollToBook();
    }
  };

  return (
    <Link href="/#book" className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
