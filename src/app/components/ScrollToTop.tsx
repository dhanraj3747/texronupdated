import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top on every route change using Lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native scroll if Lenis isn't ready
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}