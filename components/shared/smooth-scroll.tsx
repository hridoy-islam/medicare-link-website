"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamic import to ensure it only runs on the client
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          // You can customize the smoothness here
          duration: 1.5,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.5,
          touchMultiplier: 1.5,
        }
      });
    })();
  }, []);

  return <>{children}</>;
}