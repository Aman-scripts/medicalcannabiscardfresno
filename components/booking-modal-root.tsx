"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  closeBookingModal,
  subscribeBookingModal,
} from "@/lib/booking-events";

const BookingModalDialog = dynamic(
  () =>
    import("@/components/booking-modal-dialog").then(
      (mod) => mod.BookingModalDialog,
    ),
  { ssr: false },
);

export function BookingModalRoot() {
  const [open, setOpen] = useState(false);

  useEffect(() => subscribeBookingModal(setOpen), []);

  useEffect(() => {
    if (!open) return;

    const media = window.matchMedia("(max-width: 1023px)");
    const onChange = () => {
      if (!media.matches) closeBookingModal();
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open]);

  if (!open) return null;

  return <BookingModalDialog open={open} onClose={closeBookingModal} />;
}
