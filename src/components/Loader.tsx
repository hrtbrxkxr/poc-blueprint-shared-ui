export function Loader({ size = 24 }: { size?: number }) {
  return (
    <div
      role="progressbar"
      style={{
        width: size,
        height: size,
        border: "3px solid #e5e7eb",
        borderTopColor: "var(--color-primary)",
        borderRadius: "50%",
        animation: "pf-spin 0.8s linear infinite",
      }}
    />
  );
}
