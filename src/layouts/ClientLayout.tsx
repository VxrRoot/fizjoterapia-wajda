"use client";

import { ReactNode, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ClientLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Czas trwania animacji w ms
      once: true, // Animacja uruchamiana tylko raz
    });
  }, []);

  return <div className="overflow-x-hidden">{children}</div>;
}
