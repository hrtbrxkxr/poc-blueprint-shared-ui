export type ToastVariant = "success" | "error" | "info";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
}

const colors: Record<ToastVariant, string> = {
  success: "#22c55e",
  error: "#ef4444",
  info: "#2563eb",
};

export function Toast({ message, variant = "info" }: ToastProps) {
  return (
    <div
      role="status"
      style={{
        backgroundColor: colors[variant],
        color: "#fff",
        padding: "10px 16px",
        borderRadius: 6,
        fontFamily: "var(--font-family)",
      }}
    >
      {message}
    </div>
  );
}
