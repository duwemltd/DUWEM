import type { ReactNode } from "react";

interface AdminCardProps {
  children: ReactNode;
}

export function AdminCard({
  children,
}: AdminCardProps) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: 16,
        padding: 24,
        border: "1px solid #1F2937",
      }}
    >
      {children}
    </div>
  );
}