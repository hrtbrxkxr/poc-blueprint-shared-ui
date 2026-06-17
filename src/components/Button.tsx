import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={`pf-button pf-button--${variant} ${className ?? ""}`.trim()}
      style={{
        backgroundColor: variant === "primary" ? "var(--color-primary)" : "transparent",
        color: variant === "primary" ? "#fff" : "var(--color-primary)",
        border: "1px solid var(--color-primary)",
        borderRadius: 6,
        padding: "8px 16px",
        fontFamily: "var(--font-family)",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
