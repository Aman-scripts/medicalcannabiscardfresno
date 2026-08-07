type Listener = (open: boolean) => void;

const listeners = new Set<Listener>();
let isOpen = false;

export function subscribeBookingModal(listener: Listener) {
  listeners.add(listener);
  listener(isOpen);
  return () => {
    listeners.delete(listener);
  };
}

export function openBookingModal() {
  isOpen = true;
  listeners.forEach((listener) => listener(true));
}

export function closeBookingModal() {
  isOpen = false;
  listeners.forEach((listener) => listener(false));
}

export function isMobileOrTabletViewport() {
  return window.matchMedia("(max-width: 1023px)").matches;
}
