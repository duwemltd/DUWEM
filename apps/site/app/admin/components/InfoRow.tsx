import type { ReactNode } from "react";

interface InfoRowProps {
  label: string;
  value: ReactNode;
}

export function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div
      style={{
        padding: "14px 0",
        borderBottom: "1px solid #1F2937",
      }}
    >
      <div
        style={{
          color: "#9CA3AF",
          fontSize: 13,
          marginBottom: 6,
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "white",
        }}
      >
        {value}
      </div>
    </div>
  );
}