import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>{children}</div>;
}
