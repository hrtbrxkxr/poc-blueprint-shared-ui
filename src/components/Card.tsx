import type { ReactNode } from "react";

export interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      {title && <h3 style={{ fontFamily: "var(--font-family)", marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  );
}
