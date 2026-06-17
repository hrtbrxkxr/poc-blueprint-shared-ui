import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className, ...rest }: InputProps) {
  return (
    <div className="pf-input-group">
      {label && (
        <label htmlFor={id} style={{ display: "block", fontFamily: "var(--font-family)", marginBottom: 4 }}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`pf-input ${className ?? ""}`.trim()}
        style={{
          border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`,
          borderRadius: 6,
          padding: "8px 12px",
          fontFamily: "var(--font-family)",
          width: "100%",
        }}
        {...rest}
      />
      {error && <span style={{ color: "#ef4444", fontSize: 12 }}>{error}</span>}
    </div>
  );
}
