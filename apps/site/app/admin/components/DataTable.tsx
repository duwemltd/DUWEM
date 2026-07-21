import type { ReactNode } from "react";

interface DataTableProps {
  children: ReactNode;
}

export function DataTable({
  children,
}: DataTableProps) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #1F2937",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "white",
        }}
      >
        {children}
      </table>
    </div>
  );
}