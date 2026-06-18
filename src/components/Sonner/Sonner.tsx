"use client";

import * as React from "react";
import { Toaster as SonnerToaster, type ToasterProps } from "sonner";

// No next-themes here — this platform doesn't have a dark/light toggle yet,
// so "system" lets Sonner resolve it from prefers-color-scheme on its own.
function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      theme="system"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-popover)",
          "--normal-text": "var(--color-popover-foreground)",
          "--normal-border": "var(--color-border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
export { toast } from "sonner";
