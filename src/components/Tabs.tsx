import { useState, type ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
}

export function Tabs({ items, defaultTabId }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? items[0]?.id);
  const active = items.find((item) => item.id === activeId);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e5e7eb" }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            style={{
              padding: "8px 12px",
              border: "none",
              background: "none",
              borderBottom: item.id === activeId ? "2px solid var(--color-primary)" : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ padding: 16 }}>{active?.content}</div>
    </div>
  );
}
